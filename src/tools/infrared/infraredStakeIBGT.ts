import { Address, parseUnits } from "viem";
import { ToolConfig } from "../allTools";
import { CONTRACT, TOKEN } from "../../constants/index";
import { createViemWalletClient } from "../../utils/createViemWalletClient";
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from "../../utils/helpers";
import { InfraredVaultABI } from "../../constants/infraredABI";

interface InfraredStakeIBGTArgs {
  stakeAmount: number;
}

export const infraredStakeIBGTTool: ToolConfig<InfraredStakeIBGTArgs> = {
  definition: {
    type: "function",
    function: {
      name: "infrared_stake_ibgt",
      description: "Stake iBGT on Infrared",
      parameters: {
        type: "object",
        properties: {
          stakeAmount: {
            type: "number",
            description: "The amount of iBGT to stake",
          },
        },
        required: ["stakeAmount"],
      },
    },
  },
  handler: async (args: InfraredStakeIBGTArgs) => {
    try {
      const walletClient = createViemWalletClient();

      // constants
      const ibgtTokenAddress = TOKEN.IBGT;
      const infraredIBGTVaultAddress = CONTRACT.InfraredIBGTVault;

      const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        ibgtTokenAddress,
        args.stakeAmount,
      );

      console.log(`[INFO] Checking allowance for ${ibgtTokenAddress}`);

      // check allowance
      await checkAndApproveAllowance(
        walletClient,
        ibgtTokenAddress,
        CONTRACT.InfraredIBGTVault,
        parsedStakeAmount,
      );

      console.log(`[INFO] Staking ${parsedStakeAmount.toString()} iBGT`);

      const tx = await walletClient.writeContract({
        address: infraredIBGTVaultAddress,
        abi: InfraredVaultABI,
        functionName: "stake",
        args: [parsedStakeAmount],
      });

      const receipt = await walletClient.waitForTransactionReceipt({
        hash: tx as `0x${string}`,
      });

      if (receipt.status !== "success") {
        throw new Error(
          `Stake transaction failed with status: ${receipt.status}`,
        );
      }

      console.log(`[INFO] Stake successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      console.error(`[ERROR] Stake failed: ${error.message}`);
      throw new Error(`Stake failed: ${error.message}`);
    }
  },
};
