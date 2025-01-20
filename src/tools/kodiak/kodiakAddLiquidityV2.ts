import { Address, parseUnits, WalletClient } from 'viem';
import { createViemPublicClient } from '../../utils/createViemPublicClient';
import { createViemWalletClient } from '../../utils/createViemWalletClient';
import { ToolConfig } from '../allTools';
import { KodiakUniswapV2Router02ABI } from '../../constants/kodiakABI';
import { CONTRACT } from '../../constants';
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { log } from '../../utils/logger';

interface KodiakAddLiquidityArgs {
  tokenA: Address;
  tokenB: Address;
  amountADesired: number;
  amountBDesired: number;
  amountAMin: number;
  amountBMin: number;
  to?: Address; // Optional recipient address
}

export const kodiakAddLiquidityTool: ToolConfig<KodiakAddLiquidityArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'kodiak_add_liquidity',
      description: 'Add liquidity to a liquidity pool on Kodiak',
      parameters: {
        type: 'object',
        properties: {
          tokenA: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Address of the first token',
          },
          tokenB: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Address of the second token',
          },
          amountADesired: {
            type: 'number',
            description: 'The desired amount of token A',
          },
          amountBDesired: {
            type: 'number',
            description: 'The desired amount of token B',
          },
          amountAMin: {
            type: 'number',
            description: 'The minimum amount of token A',
          },
          amountBMin: {
            type: 'number',
            description: 'The minimum amount of token B',
          },
          to: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: "The recipient's address (optional)",
          },
        },
        required: [
          'tokenA',
          'tokenB',
          'amountADesired',
          'amountBDesired',
          'amountAMin',
          'amountBMin',
        ],
      },
    },
  },
  handler: async (args, walletClient?: WalletClient) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      // const publicClient = createViemPublicClient();

      const recipient = args.to || walletClient.account.address;

      log.info(
        `[INFO] Adding liquidity: ${args.amountADesired} ${args.tokenA} and ${args.amountBDesired} ${args.tokenB} for ${recipient}`,
      );

      const deadline = Math.floor(Date.now() / 1000) + 1200;

      const parsedAmountADesired = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.tokenA,
        args.amountADesired,
      );

      const parsedAmountBDesired = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.tokenB,
        args.amountBDesired,
      );

      const parsedAmountAMin = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.tokenA,
        args.amountAMin,
      );

      const parsedAmountBMin = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.tokenB,
        args.amountBMin,
      );

      await checkAndApproveAllowance(
        walletClient,
        args.tokenA,
        CONTRACT.KodiakSwapRouter02,
        parsedAmountADesired,
      );

      await checkAndApproveAllowance(
        walletClient,
        args.tokenB,
        CONTRACT.KodiakSwapRouter02,
        parsedAmountBDesired,
      );

      const tx = await walletClient.writeContract({
        address: CONTRACT.KodiakSwapRouter02,
        abi: KodiakUniswapV2Router02ABI,
        functionName: 'addLiquidity',
        args: [
          args.tokenA,
          args.tokenB,
          parsedAmountADesired,
          parsedAmountBDesired,
          parsedAmountAMin,
          parsedAmountBMin,
          recipient,
          BigInt(deadline),
        ],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      // const receipt = await walletClient.waitForTransactionReceipt({
      //   hash: tx as `0x${string}`,
      // });

      // if (receipt.status !== 'success') {
      //   throw new Error(
      //     `Add liquidity transaction failed with status: ${receipt.status}`,
      //   );
      // }

      log.info(`[INFO] Liquidity added successfully: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      log.error(`[ERROR] Adding liquidity failed: ${error.message}`);
      throw new Error(`Add liquidity failed: ${error.message}`);
    }
  },
};
