import axios from 'axios';
import {
  Address,
  parseUnits,
  PublicClient,
  WalletClient,
  zeroAddress,
} from 'viem';
import { ToolConfig } from '../allTools';
import { BeraCrocMultiSwapABI } from '../../constants/abis/bexABI';
import {
  checkAndApproveAllowance,
  fetchTokenDecimals,
} from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';

interface BexSwapArgs {
  amountIn: number;
  slippage?: number;
  tokenIn: Address; // Optional input token, defaults to ETH if null or undefined
  tokenOut: Address; // Output token address
  to?: Address; // Optional recipient address
  type?: 'exact_in' | 'exact_out';
}

async function getBexSwapPaths(args: BexSwapArgs, config: ConfigChain) {
  log.info(
    `[INFO] Getting BEX swap paths for ${args.amountIn} ${args.tokenIn} to ${args.tokenOut}`,
    !args.tokenOut || args.tokenOut === zeroAddress
      ? config.TOKEN.WBERA
      : args.tokenOut,
  );
  // Define the GraphQL query
  const graphqlQuery = {
    query: `#graphql
    query MyQuery($chain: GqlChain!, $swapType: GqlSorSwapType!, $swapAmount: AmountHumanReadable!, $tokenIn: String!, $tokenOut: String!) {
      sorGetSwapPaths(
        swapAmount: $swapAmount
        chain: $chain
        swapType: $swapType
        tokenIn: $tokenIn
        tokenOut: $tokenOut
      ) {
        tokenInAmount
        tokenOutAmount
        returnAmount
        priceImpact {
          error
          priceImpact
        }
        swapAmount
        paths {
          inputAmountRaw
          outputAmountRaw
          pools
          protocolVersion
          tokens {
            address
            decimals
          }
        }
        routes {
          share
          tokenInAmount
          tokenOut
          tokenOutAmount
          hops {
            poolId
            tokenIn
            tokenInAmount
            tokenOut
            tokenOutAmount
            pool {
              symbol
            }
          }
        }
      }
    }
    `,
    variables: {
      chain: 'BERACHAIN',
      swapAmount: args.amountIn.toString(),
      swapType: args.type === 'exact_in' ? 'EXACT_IN' : 'EXACT_OUT',
      tokenIn: args.tokenIn,
      tokenOut:
        !args.tokenOut || args.tokenOut === zeroAddress
          ? config.TOKEN.WBERA
          : args.tokenOut,
    },
  };

  try {
    log.info(
      `[INFO] Querying BEX swap paths for ${args.amountIn} ${args.tokenIn} to ${args.tokenOut}`,
    );

    const swapPathsResponse = await axios.post(
      'https://api.berachain.com/',
      graphqlQuery,
      {
        headers: {
          'content-type': 'application/json',
          chainid: '80094',
        },
      },
    );

    log.info(`[INFO] Successfully retrieved swap paths from BEX`);

    // Process the response data
    return swapPathsResponse.data.data.sorGetSwapPaths;
  } catch (error: any) {
    log.error(`[ERROR] Failed to get BEX swap paths: ${error.message}`);
    if (error.response) {
      log.error(
        `[ERROR] Response data: ${JSON.stringify(error.response.data)}`,
      );
    }
    throw error;
  }
}

export const bexSwapTool: ToolConfig<BexSwapArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'bex_swap',
      description: 'Perform a token swap on BEX',
      parameters: {
        type: 'object',
        properties: {
          amountIn: {
            type: 'number',
            description: 'The amount of input token to swap',
          },
          slippage: {
            type: 'number',
            description: 'The slippage tolerance for the swap',
          },
          tokenIn: {
            type: ['string'],
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Address of the input token',
          },
          tokenOut: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Address of the output token',
          },
          to: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description:
              "The optional recipient's public address for the output tokens. Default is the wallet address",
          },
          type: {
            type: 'string',
            enum: ['exact_in', 'exact_out'],
            description: 'The type of swap to perform (GIVEN_IN or GIVEN_OUT)',
          },
        },
        required: ['amountIn', 'amountOutMin', 'tokenIn', 'tokenOut'],
      },
    },
  },
  handler: async (
    args,
    config: ConfigChain,
    walletClient: WalletClient,
    publicClient: PublicClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      const recipient =
        args.to && args.to !== zeroAddress
          ? args.to
          : walletClient.account.address;

      const isNativeSwap = !args.tokenIn || args.tokenIn === zeroAddress;

      log.info(`[INFO] Initiating Bex swap: ${JSON.stringify(args)}`);

      const deadline = Math.floor(Date.now() / 1000) + 1200;
      const inputTokenDecimals = await fetchTokenDecimals(
        walletClient,
        args.tokenIn!,
      );

      const parsedAmount = parseUnits(
        args.amountIn.toString(),
        Number(inputTokenDecimals),
      );

      await checkAndApproveAllowance(
        walletClient,
        args.tokenIn,
        config.CONTRACT.BeraCrocMultiSwap,
        parsedAmount,
      );

      try {
        // Get swap paths data (optional, can be used for additional information)
        const swapPaths = await getBexSwapPaths(args, config);
        // Get the route data which contains the steps

        if (!swapPaths || !swapPaths.routes || swapPaths.routes.length === 0) {
          throw new Error(`No valid swap routes returned from the BEX API`);
        }

        const expectedOutputAmount = swapPaths.tokenOutAmount;
        const poolId = swapPaths.routes[0].hops[0].poolId;

        const contractArgs = [
          {
            poolId: poolId,
            kind: args?.type === 'exact_out' ? 1 : 0,
            assetIn: args.tokenIn,
            assetOut: args.tokenOut,
            amount: parsedAmount,
            userData: '0x',
          },
          {
            sender: recipient,
            fromInternalBalance: false,
            recipient: recipient,
            toInternalBalance: false,
          },
          BigInt(expectedOutputAmount),
          BigInt(deadline),
        ] as const;

        // const estimatedGas = await publicClient.estimateContractGas({
        //   address: config.CONTRACT.BeraCrocMultiSwap,
        //   abi: BeraCrocMultiSwapABI,
        //   functionName: 'swap',
        //   args: contractArgs,
        // });

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.BeraCrocMultiSwap,
          abi: BeraCrocMultiSwapABI,
          functionName: 'swap',
          args: contractArgs,
          chain: walletClient.chain,
          account: walletClient.account,
          value: isNativeSwap ? parsedAmount : undefined,
          // gas: estimatedGas,
        });

        log.info(`[INFO] Swap successful: Transaction hash: ${tx}`);
        return tx;
      } catch (error: any) {
        log.error(`[ERROR] BEX swap failed: ${error.message}`);
        throw error;
      }
    } catch (error: any) {
      log.error(`[ERROR] Swap failed: ${error.message}`);
      throw new Error(`Swap failed: ${error.message}`);
    }
  },
};
