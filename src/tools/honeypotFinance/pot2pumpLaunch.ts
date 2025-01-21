import { Address } from "viem";
import { ToolConfig } from "../allTools";
import { CONTRACT } from "../../constants/index";
import { createViemWalletClient } from "../../utils/createViemWalletClient";
import { log } from "../../utils/logger";
import { pot2pumpFactoryABI } from "../../constants/honeypotFinanceABI";

interface Pot2PumpLaunchArgs {
  raisedToken: Address;
  name: string;
  symbol: string;
  swapHandler: Address; // 
}

export const pot2pumpLaunchTool: ToolConfig<Pot2PumpLaunchArgs> = {
  definition: {
    type: "function",
    function: {
      name: "createPair",
      description: "Launch a new pot2pump project",
      parameters: {
        type: "object",
        properties: {
          raisedToken: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "Token address to deposit",
          },
          name: {
            type: "string",
            description: "The name of the launch",
          },
          symbol: {
            type: "string",
            description: "The symbol of the launch",
          },
          swapHandler: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The address of the nonfungible position manager",
          },
        },
        required: ["raisedToken", "name", "symbol", "swapHandler"],
      },
    },
  },
  handler: async (args) => {
    try {
      const walletClient = createViemWalletClient();

      // Execute launch
      const hash = await walletClient.writeContract({
        address: CONTRACT.Pot2PumpFactory,
        abi: pot2pumpFactoryABI,
        functionName: "createPair",
        args: [
          {
            raisedToken: args.raisedToken,
            name: args.name,
            symbol: args.symbol,
            swapHandler: CONTRACT.HoneypotNonfungiblePositionManager,
          },
        ],
      });

      log.info(
        `Successfully launched pot2pump project. Transaction hash: ${hash}`,
      );
      return hash;
    } catch (error: any) {
      log.error(`Pot2Pump launch failed: ${error.message}`);
      throw error;
    }
  },
};