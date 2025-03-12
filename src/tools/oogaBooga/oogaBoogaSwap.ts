import axios from 'axios';
import { Address, PublicClient, WalletClient, zeroAddress } from 'viem';
import { ToolConfig } from '../allTools';
import { fetchTokenDecimalsAndParseAmount } from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';
import { EnvConfig, ToolEnvConfigs } from '../../constants/types';

interface OogaBoogaSwapArgs {
  tokenIn: Address; // Token to swap from
  tokenOut: Address; // Token to swap to
  amount: number; // Human-readable amount to swap
  slippage: string; // Slippage tolerance, e.g., 0.01 for 1%
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

const checkAndApproveAllowance = async (
  config: ConfigChain,
  walletClient: WalletClient,
  publicClient: PublicClient,
  base: Address,
  parsedAmount: bigint,
  headers: any,
): Promise<void> => {
  log.info(`[INFO] Checking allowance for ${base}`);

  if (base === zeroAddress) {
    log.info(`[INFO] Skipping allowance check for zero address`);
    return;
  }

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
  slippage: string,
  headers: any,
): Promise<string> => {
  try {
    log.info(`[INFO] Fetching swap details from OogaBooga API`);
    const params = {
      tokenIn: base,
      amount: parsedAmount.toString(),
      tokenOut: quote,
      to: walletClient.account?.address,
      slippage: Number(slippage) / 100,
    };

    const swapResponse = await axios.get(`${config.URL.OogaBoogaURL}/v1/swap`, {
      headers,
      params,
    });

    const to = swapResponse.data?.tx?.to;

    if (!to) {
      throw new Error('Swap transaction to address is missing');
    }

    const { tx: swapTx } = swapResponse.data;

    const args = {
      to: swapTx.to as Address,
      data: swapTx.data as `0x${string}`,
      value: swapTx.value ? BigInt(swapTx.value) : 0n,
    };

    const swapHash = await walletClient.sendTransaction({
      ...args,
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
          tokenIn: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Address of the input token',
          },
          tokenOut: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Address of the output token',
          },
          amount: {
            type: 'number',
            description: 'The amount of tokens to swap',
          },
          slippage: {
            type: 'string',
            description: 'The allowed slippage tolerance in percentage',
          },
        },
        required: ['tokenIn', 'tokenOut', 'amount'],
      },
    },
  },
  handler: async (
    args,
    config: ConfigChain,
    walletClient: WalletClient,
    publicClient: PublicClient,
    toolEnvConfigs?: ToolEnvConfigs,
  ) => {
    if (!toolEnvConfigs?.[EnvConfig.OOGA_BOOGA_API_KEY]) {
      throw new Error('OOGA_BOOGA_API_KEY is required.');
    }

    const headers = {
      Authorization: `Bearer ${toolEnvConfigs?.[EnvConfig.OOGA_BOOGA_API_KEY]}`,
    };

    log.info(
      `[INFO] Starting OogaBooga Swap for ${args.amount} of ${args.tokenIn} to ${args.tokenOut}`,
    );

    const parsedAmount = await fetchTokenDecimalsAndParseAmount(
      walletClient,
      args.tokenIn!,
      args.amount,
    );

    await checkAndApproveAllowance(
      config,
      walletClient,
      publicClient,
      args.tokenIn!,
      parsedAmount,
      headers,
    );

    return performSwap(
      config,
      walletClient,
      args.tokenIn,
      args.tokenOut,
      parsedAmount,
      args.slippage || '1',
      headers,
    );
  },
};
