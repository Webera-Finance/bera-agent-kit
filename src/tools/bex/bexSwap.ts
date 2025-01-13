import axios from "axios";
import { Address, parseUnits } from "viem";
import { ToolConfig } from "../allTools";
import { BeraCrocMultiSwapABI } from "../../constants/bexABI";
import { CONTRACT, TOKEN, URL } from "../../constants";
import { createViemWalletClient } from "../../utils/createViemWalletClient";
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from "../../utils/helpers";
import { log } from "../../utils/logger";

interface BexSwapArgs {
  base: Address;
  quote: Address;
  amount: number;
}

export const bexSwapTool: ToolConfig<BexSwapArgs> = {
  definition: {
    type: "function",
    function: {
      name: "bex_swap",
      description: "Perform a token swap on BEX",
      parameters: {
        type: "object",
        properties: {
          base: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "Base token address",
          },
          quote: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "Quote token address",
          },
          amount: {
            type: "number",
            description: "The amount of swap tokens",
          },
        },
        required: ["base", "quote", "amount"],
      },
    },
  },
  handler: async (args) => {
    // TODO: Detect the "native token" automatically so that users do not need to provide the BERA address.
    try {
      const walletClient = createViemWalletClient();

      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.base,
        args.amount,
      );

      log.info(`[INFO] Checking allowance for ${args.base}`);

      await checkAndApproveAllowance(
        walletClient,
        args.base,
        CONTRACT.BeraCrocMultiSwap,
        parsedAmount,
      );

      // Fetch swap route
      const routeApiUrl = `${URL.BEXRouteURL}?fromAsset=${args.base}&toAsset=${args.quote}&amount=${parsedAmount.toString()}`;
      log.info(`[INFO] request route: ${routeApiUrl}`);
      const response = await axios.get(routeApiUrl);

      if (response.status !== 200 || !response.data) {
        throw new Error(`Failed to fetch swap steps from API`);
      }

      const steps = response.data.steps.map((step: any) => ({
        poolIdx: step.poolIdx,
        base: step.base,
        quote: step.quote,
        isBuy: step.isBuy,
      }));

      if (!steps.length) {
        throw new Error(`No valid swap steps returned from the API`);
      }

      log.info(`[INFO] Swap steps fetched:`, steps);

      const parsedMinOut = BigInt(0); //TODO: calculate min out

      const tx = await walletClient.writeContract({
        address: CONTRACT.BeraCrocMultiSwap,
        abi: BeraCrocMultiSwapABI,
        functionName: "multiSwap",
        args: [steps, parsedAmount, parsedMinOut],
        value: steps.some((step: any) => step.base === TOKEN.WBERA)
          ? parsedAmount
          : undefined,
      });

      const receipt = await walletClient.waitForTransactionReceipt({
        hash: tx as `0x${string}`,
      });

      if (receipt.status !== "success") {
        throw new Error(
          `Swap transaction failed with status: ${receipt.status}`,
        );
      }

      log.info(`[INFO] Swap successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      log.error(`[ERROR] Swap failed: ${error.message}`);
      throw new Error(`Swap failed: ${error.message}`);
    }
  },
};
