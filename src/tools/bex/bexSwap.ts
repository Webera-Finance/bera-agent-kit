import axios from 'axios';
import { Address, PublicClient, WalletClient, zeroAddress } from 'viem';
import { ToolConfig } from '../allTools';
import { BeraCrocMultiSwapABI } from '../../constants/abis/bexABI';
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { log } from '../../utils/logger';
import { createViemPublicClient } from '../../utils/createViemPublicClient';
import { ConfigChain } from '../../constants/chain';
import { SupportedChainId } from '../../utils/enum';

interface BexSwapArgs {
  base: Address;
  quote: Address;
  amount: number;
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
          quote: {
            // from
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description:
              'Quote token address. If null/undefined, default is BERA native token',
          },
          base: {
            // to
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Base token address',
          },
          amount: {
            type: 'number',
            description: 'The amount of swap tokens',
          },
        },
        required: ['base', 'quote', 'amount'],
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

      log.info(
        `[INFO] Initiating Bex swap: ${args.amount} ${args.quote} for ${args.base}`,
      );
      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.quote,
        args.amount,
      );

      log.info(`[INFO] Checking allowance for ${args.quote}`);

      await checkAndApproveAllowance(
        walletClient,
        args.quote,
        config.CONTRACT.BeraCrocMultiSwap,
        parsedAmount,
      );

      const quoteBexRouteAddress =
        args.quote === zeroAddress ? config.TOKEN.WBERA : args.quote;

      // Fetch swap route
      const routeApiUrl = `${config.URL.BEXRouteURL}?fromAsset=${quoteBexRouteAddress}&toAsset=${args.base}&amount=${parsedAmount.toString()}`;
      log.info(`[INFO] request route: ${routeApiUrl}`);
      const response = await axios.get(routeApiUrl);

      if (response.status !== 200 || !response.data) {
        throw new Error(`Failed to fetch swap steps from API`);
      }

      if (response.data.steps.length === 0) {
        throw new Error(`No valid swap steps returned from the API`);
      }

      const steps = response.data.steps.map((step: any) => ({
        poolIdx: step.poolIdx,
        base: step.base,
        quote: args.quote === zeroAddress ? zeroAddress : step.quote,
        isBuy: step.isBuy,
      }));

      if (!steps.length) {
        throw new Error(`No valid swap steps returned from the API`);
      }

      log.info(`[INFO] Swap steps fetched:`, steps);

      const parsedMinOut = BigInt('0'); //TODO: calculate min out

      const estimatedGas = await publicClient.estimateContractGas({
        address: config.CONTRACT.BeraCrocMultiSwap,
        abi: BeraCrocMultiSwapABI,
        functionName: 'multiSwap',
        args: [steps, parsedAmount, parsedMinOut],
        account: walletClient.account,
        value: steps.some((step: any) => step.quote === zeroAddress)
          ? parsedAmount
          : undefined,
      });

      const tx = await walletClient.writeContract({
        address: config.CONTRACT.BeraCrocMultiSwap,
        abi: BeraCrocMultiSwapABI,
        functionName: 'multiSwap',
        args: [steps, parsedAmount, parsedMinOut],
        chain: walletClient.chain,
        account: walletClient.account,
        value: steps.some((step: any) => step.quote === zeroAddress)
          ? parsedAmount
          : undefined,
        gas: estimatedGas,
      });

      log.info(`[INFO] Swap successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      log.error(`[ERROR] Swap failed: ${error.message}`);
      throw new Error(`Swap failed: ${error.message}`);
    }
  },
};
