import { Address, parseUnits } from "viem";
import { ToolConfig } from "../allTools";
import { CONTRACT, TOKEN } from "../../constants/index";
import { createViemWalletClient } from "../../utils/createViemWalletClient";
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from "../../utils/helpers";
import { InfraredVaultABI } from "../../constants/infraredABI";

interface InfraredWithdrawStakedIBGTArgs {
  withdrawAmount: number;
}

export const infraredWithdrawStakedIBGTTool: ToolConfig<InfraredWithdrawStakedIBGTArgs> =
  {
    definition: {
      type: "function",
      function: {
        name: "infrared_withdraw_staked_ibgt",
        description: "Withdraw staked iBGT on Infrared",
        parameters: {
          type: "object",
          properties: {
            withdrawAmount: {
              type: "number",
              description: "The amount of iBGT to withdraw from Infrared",
            },
          },
          required: ["withdrawAmount"],
        },
      },
    },
    handler: async (args: InfraredWithdrawStakedIBGTArgs) => {
      try {
        const walletClient = createViemWalletClient();

        // constants
        const ibgtTokenAddress = TOKEN.IBGT;
        const infraredIBGTVaultAddress = CONTRACT.InfraredIBGTVault;

        const parsedWithdrawAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          ibgtTokenAddress,
          args.withdrawAmount,
        );

        console.log(`[INFO] Checking allowance for ${ibgtTokenAddress}`);

        // check staked iBGT amount
        const stakedIBGT = (await walletClient.readContract({
          address: infraredIBGTVaultAddress,
          abi: InfraredVaultABI,
          functionName: "balanceOf",
          args: [walletClient.account.address],
        })) as bigint;

        if (parsedWithdrawAmount > stakedIBGT) {
          throw new Error(
            `Withdraw amount exceeds staked iBGT amount: 
            - staked iBGT: ${stakedIBGT.toString()}
            - withdraw amount: ${parsedWithdrawAmount.toString()}`,
          );
        }

        console.log(
          `[INFO] Withdrawing ${parsedWithdrawAmount.toString()} iBGT`,
        );

        const tx = await walletClient.writeContract({
          address: infraredIBGTVaultAddress,
          abi: InfraredVaultABI,
          functionName: "withdraw",
          args: [parsedWithdrawAmount],
        });

        const receipt = await walletClient.waitForTransactionReceipt({
          hash: tx as `0x${string}`,
        });

        if (receipt.status !== "success") {
          throw new Error(
            `Withdraw transaction failed with status: ${receipt.status}`,
          );
        }

        console.log(`[INFO] Withdraw successful: Transaction hash: ${tx}`);
        return tx;
      } catch (error: any) {
        console.error(`[ERROR] Withdraw failed: ${error.message}`);
        throw new Error(`Withdraw failed: ${error.message}`);
      }
    },
  };
