import axios from 'axios';
import { Address, WalletClient, zeroAddress } from 'viem';
import { ToolConfig } from '../allTools';
import { sleep } from 'openai/core';
import { createViemPublicClient } from '../../utils/createViemPublicClient';
import { fetchTokenDecimalsAndParseAmount } from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';
import { SupportedChainId } from '../../utils/enum';

interface OogaBoogaSwapArgs {
  base: Address; // Token to swap from
  quote: Address; // Token to swap to
  amount: number; // Human-readable amount to swap
  maxSlippage: string; // Slippage tolerance, e.g., 0.01 for 1%
}

interface OogaBoogaSwapToolEnvConfigs {
  OOGA_BOOGA_API_KEY: string;
}

const getAllowance = async (
  config: ConfigChain,
  walletClient: WalletClient,
  base: Address,
  headers: any,
): Promise<bigint> => {
  const allowanceResponse = await axios.get(
    `${config.URL.OogaBoogaURL}/v1/approve/allowance`,
    {
      headers,
      params: {
        token: base,
        from: walletClient.account?.address,
      },
    },
  );
  return allowanceResponse.data.allowance;
};

async function checkAllowanceAfterApproval(
  config: ConfigChain,
  walletClient: WalletClient,
  base: Address,
  headers: any,
  parsedAmount: bigint,
) {
  for (let i = 0; i < 10; i++) {
    const allowance = await getAllowance(config, walletClient, base, headers);
    if (BigInt(allowance) >= parsedAmount) {
      return true;
    }
    await sleep(300);
  }

  return false;
}

const checkAndApproveAllowance = async (
  config: ConfigChain,
  walletClient: WalletClient,
  base: Address,
  parsedAmount: bigint,
  headers: any,
  envType: boolean,
): Promise<void> => {
  log.info(`[INFO] Checking allowance for ${base}`);

  if (base === zeroAddress) {
    log.info(`[INFO] Skipping allowance check for zero address`);
    return;
  }
  const publicClient = createViemPublicClient(envType);

  const allowance = await getAllowance(config, walletClient, base, headers);
  log.info(`[DEBUG] Allowance API response:`, allowance);

  if (BigInt(allowance) < parsedAmount) {
    log.info(`[INFO] Insufficient allowance. Approving ${parsedAmount}`);
    const approveResponse = await axios.get(
      `${config.URL.OogaBoogaURL}/v1/approve`,
      {
        headers,
        params: {
          token: base,
          amount: parsedAmount.toString(),
        },
      },
    );
    log.info(`[DEBUG] Approve API response:`, approveResponse.data);

    const { tx } = approveResponse.data;

    const hash = await walletClient.sendTransaction({
      account: tx.from as Address,
      to: tx.to as Address,
      data: tx.data as `0x${string}`,
      chain: walletClient.chain,
    });

    log.info(`[INFO] Sent approve transaction. Hash: ${hash}`);
    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    log.info(`[DEBUG] Approval Receipt:`, receipt);
    if (receipt.status !== 'success') {
      throw new Error('Approval transaction failed');
    }
    log.info(
      `[INFO] Approval complete: ${receipt.transactionHash} ${receipt.status}`,
    );

    const isAllowanceSufficient = await checkAllowanceAfterApproval(
      config,
      walletClient,
      base,
      headers,
      parsedAmount,
    );
    if (!isAllowanceSufficient) {
      throw new Error('Allowance not updated');
    }
  } else {
    log.info(`[INFO] Sufficient allowance available.`);
  }
};

const performSwap = async (
  config: ConfigChain,
  walletClient: WalletClient,
  base: Address,
  quote: Address,
  parsedAmount: bigint,
  maxSlippage: string,
  headers: any,
  envType: boolean,
): Promise<string> => {
  try {
    log.info(`[INFO] Fetching swap details from OogaBooga API`);
    const params = {
      tokenIn: base,
      amount: parsedAmount.toString(),
      tokenOut: quote,
      to: walletClient.account?.address,
      maxSlippage,
    };

    log.debug(`[DEBUG] swap params:`, params);

    const swapResponse = await axios.get(`${config.URL.OogaBoogaURL}/v1/swap`, {
      headers,
      params,
    });

    const to = swapResponse.data?.tx?.to;

    if (!to) {
      throw new Error('Swap transaction to address is missing');
    }

    const { tx: swapTx } = swapResponse.data;
    log.debug(`[DEBUG] swap transaction params:`, swapTx);

    const args = {
      to: swapTx.to as Address,
      data: swapTx.data as `0x${string}`,
      value: swapTx.value ? BigInt(swapTx.value) : 0n,
    };
    const publicClient = createViemPublicClient(envType);
    const gas = await publicClient.estimateGas({
      account: walletClient.account?.address as Address,
      ...args,
    });

    // Add 10% gas buffer
    const gasWithBuffer = (gas * 11n) / 10n;

    log.debug(`[DEBUG] swap gas:`, gas);

    const swapHash = await walletClient.sendTransaction({
      ...args,
      gas: gasWithBuffer,
      account: swapTx.from as Address,
      chain: walletClient.chain,
    });

    return swapHash;
  } catch (error: any) {
    log.error(`[ERROR] Swap failed: ${error.message}`);
    throw new Error(`Swap failed: ${error.message}`);
  }
};

// Main tool handler
export const oogaBoogaSwapTool: ToolConfig<OogaBoogaSwapArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'ooga_booga_swap',
      description: 'Perform a token swap using the OogaBooga API',
      parameters: {
        type: 'object',
        properties: {
          base: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Base token address (token to swap from)',
          },
          quote: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Quote token address (token to swap to)',
          },
          amount: {
            type: 'number',
            description: 'The amount of tokens to swap',
          },
          maxSlippage: {
            type: 'string',
            description: 'The allowed slippage tolerance (0.01 = 1%)',
          },
        },
        required: ['base', 'quote', 'amount'],
      },
    },
  },
  handler: async (
    args,
    config: ConfigChain,
    walletClient?: WalletClient,
    toolEnvConfigs?: Record<string, unknown>,
  ) => {
    const configs: OogaBoogaSwapToolEnvConfigs = {
      OOGA_BOOGA_API_KEY: process.env.OOGA_BOOGA_API_KEY || '',
      ...toolEnvConfigs,
    };

    if (!configs.OOGA_BOOGA_API_KEY) {
      throw new Error('OOGA_BOOGA_API_KEY is required.');
    }

    if (!walletClient || !walletClient.account) {
      throw new Error('Wallet client is not provided');
    }

    const headers = { Authorization: `Bearer ${configs.OOGA_BOOGA_API_KEY}` };

    log.info(
      `[INFO] Starting OogaBooga Swap for ${args.amount} of ${args.base} to ${args.quote}`,
    );

    const envType =
      walletClient?.chain?.id === SupportedChainId.Mainnet ? true : false;

    const parsedAmount = await fetchTokenDecimalsAndParseAmount(
      walletClient,
      args.base,
      args.amount,
    );

    await checkAndApproveAllowance(
      config,
      walletClient,
      args.base,
      parsedAmount,
      headers,
      envType,
    );

    return performSwap(
      config,
      walletClient,
      args.base,
      args.quote,
      parsedAmount,
      args.maxSlippage,
      headers,
      envType,
    );
  },
};
