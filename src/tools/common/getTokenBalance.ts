import { Address } from "viem";
import { ToolConfig } from "../allTools";
import { formatEther } from "viem";
import { createViemPublicClient } from "../../utils/createViemPublicClient";
import { TOKEN } from "../../constants/index";
import { TokenABI } from "../../constants/tokenABI";
import {
  fetchTokenDecimalsAndFormatAmount,
  fetchTokenDecimalsAndParseAmount,
} from "../../utils/helpers";

interface GetTokenBalanceArgs {
  wallet: Address;
  tokenName: string;
}

export const getTokenBalanceTool: ToolConfig<GetTokenBalanceArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_token_balance",
      description: "Get the token balance of a wallet",
      parameters: {
        type: "object",
        properties: {
          wallet: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The wallet address to get the balance of",
          },
          tokenName: {
            type: "string",
            description: "The name of the token to get the balance",
          },
        },
        required: ["wallet", "tokenName"],
      },
    },
  },
  handler: async (args: GetTokenBalanceArgs) => {
    try {
      const { wallet, tokenName } = args;

      if (!wallet) {
        throw new Error("Wallet address is required");
      }

      if (!tokenName) {
        throw new Error("Token name is required");
      }

      const publicClient = createViemPublicClient();

      // find the token address from the token name
      const foundTokenName = Object.keys(TOKEN).find(
        (key) => key.toLowerCase() === tokenName.toLowerCase(),
      );

      if (!foundTokenName) {
        throw new Error(`Token ${tokenName} not found`);
      }

      const tokenAddress = TOKEN[foundTokenName];

      if (!tokenAddress) {
        throw new Error(`Token ${foundTokenName} address not found`);
      }

      const rawTokenBalanceOfWallet = await publicClient.readContract({
        address: tokenAddress,
        abi: TokenABI,
        functionName: "balanceOf",
        args: [wallet],
      });

      const formattedTokenBalanceOfWallet =
        await fetchTokenDecimalsAndFormatAmount(
          publicClient,
          tokenAddress,
          rawTokenBalanceOfWallet,
        );

      return formattedTokenBalanceOfWallet;
    } catch (error) {
      console.error(`[ERROR] Get Token Balance failed: ${error}`);
      throw new Error(`Get Token Balance  failed: ${error}`);
    }
  },
};
