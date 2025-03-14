import { encodeAbiParameters, WalletClient } from 'viem';
import { LP_TOKEN_CONFIG } from '../../constants';
import { PoolABI } from '../../constants/abis/PoolABI';
import { ConfigChain } from '../../constants/chain';
import
  {
    checkAndApproveAllowance,
    checkBalance,
    fetchTokenDecimalsAndParseAmount,
    getConfigByToolArgs,
  } from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ToolConfig } from '../allTools';

// Define join kinds enum
enum JoinKind {
  INIT = 0,
  EXACT_TOKENS_IN_FOR_BPT_OUT = 1,
  TOKEN_IN_FOR_EXACT_BPT_OUT = 2,
}

// Interface for the joinPool function arguments
export interface BerahubJoinPoolArgs {
  token0?: string;
  token1?: string;
  lpPair?: string;
  amount0In: number;
  amount1In: number;
  slippage?: number; // Optional slippage percentage (e.g., 1 for 1%)
}

// Tool definition for berahubJoinPool
export const berahubJoinPoolTool: ToolConfig<BerahubJoinPoolArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'berahub_join_pool',
      description:
        'Join a liquidity pool in Berahub by providing liquidity. Supports various LP pairs including WBERA/HONEY, WBTC/WBERA, WETH/WBERA, BYUSD/HONEY, and USDCE/HONEY.',
      parameters: {
        type: 'object',
        properties: {
          token0: {
            type: 'string',
            description: 'The first token to join the pool',
          },
          token1: {
            type: 'string',
            description: 'The second token to join the pool',
          },
          lpPair: {
            type: 'string',
            description: 'The LP pair to join',
          },
          amount0In: {
            type: 'number',
            description: 'Amount of first token to provide',
          },
          amount1In: {
            type: 'number',
            description: 'Amount of second token to provide',
          },
          slippage: {
            type: 'number',
            description:
              'Optional slippage tolerance in percentage (defaults to 2.5%)',
          },
        },
        required: ['lpPair', 'amount0In', 'amount1In'],
      },
    },
  },
  handler: async (
    args: BerahubJoinPoolArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      log.info(`Starting berahub join pool process for ${args.lpPair}...`);

      if (!walletClient?.account) {
        throw new Error('Wallet client with account is required');
      }
    
      // Get pool configuration
      const poolConfig = getConfigByToolArgs( args, config );
      
      if (!poolConfig || !poolConfig?.poolId) {
        throw new Error(
          `Pool configuration not found for ${args.lpPair || `${args.token0}_${args.token1}`}. Available pairs: ${Object.keys(LP_TOKEN_CONFIG).join(', ')}`,
        );
      }
      const poolId = poolConfig.poolId as string;

      // Get token addresses
      const token0Address = poolConfig.token0Address;
      const token1Address = poolConfig.token1Address;

      // Sort tokens by address (required for Balancer/BEX protocol)
      const sortedTokenAddresses = [token0Address, token1Address].sort(
        (a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1),
      );

      // Rearrange amounts to match sorted token order
      const sortedAmountsIn =
        sortedTokenAddresses[0] !== token0Address
          ? [args.amount1In, args.amount0In]
          : [args.amount0In, args.amount1In];

      const account = walletClient.account.address;
      const vaultAddress = config.CONTRACT.BeraCrocMultiSwap as `0x${string}`;

      // Parse amounts with correct decimals
      const parsedAmounts = await Promise.all(
        sortedTokenAddresses.map((address, index) =>
          fetchTokenDecimalsAndParseAmount(
            walletClient,
            address as `0x${string}`,
            sortedAmountsIn[index],
          ),
        ),
      );

      // Check balances and approve allowances
      for (let i = 0; i < 2; i++) {
        await checkBalance(
          walletClient,
          parsedAmounts[i],
          sortedTokenAddresses[i],
        );
        await checkAndApproveAllowance(
          walletClient,
          sortedTokenAddresses[i],
          config.CONTRACT.BeraCrocMultiSwap,
          parsedAmounts[i],
        );
      }

      // Prepare userData for join
      const userData = encodeAbiParameters(
        [{ type: 'uint8' }, { type: 'uint256[]' }, { type: 'uint256' }],
        [JoinKind.EXACT_TOKENS_IN_FOR_BPT_OUT, parsedAmounts, 0n], // minimumBPT = 0
      );

      // Prepare the JoinPoolRequest struct
      const isWberaHoney = args.lpPair === 'WBERA_HONEY';
      const joinPoolRequest = {
        assets: isWberaHoney
          ? sortedTokenAddresses
          : [
              sortedTokenAddresses[0],
              config.TOKEN[
                args.lpPair as keyof typeof config.TOKEN
              ] as `0x${string}`,
              sortedTokenAddresses[1],
            ],
        maxAmountsIn: isWberaHoney
          ? parsedAmounts
          : [parsedAmounts[0], 0n, parsedAmounts[1]],
        userData,
        fromInternalBalance: false,
      };

      // Execute the transaction
      const hash = await walletClient.writeContract({
        address: vaultAddress,
        abi: PoolABI,
        functionName: 'joinPool',
        args: [poolId, account, account, joinPoolRequest],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      log.info(
        `Successfully joined ${args.lpPair} pool. Transaction hash: ${hash}`,
      );
      return hash;
    } catch (error: any) {
      log.error(`Failed to join ${args.lpPair} pool: ${error.message}`);
      throw new Error(`Failed to join pool: ${error.message}`);
    }
  },
};
