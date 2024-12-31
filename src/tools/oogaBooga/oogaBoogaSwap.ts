import axios from "axios";
import { Address } from "viem";
import { ToolConfig } from "../allTools.js";
import { createViemWalletClient } from "../../utils/createViemWalletClient";
import { URL } from "../../constants";
import { fetchTokenDecimalsAndParseAmount } from "../../utils/helpers";

interface OogaBoogaSwapArgs {
  base: Address; // Token to swap from
  quote: Address; // Token to swap to
  amount: number; // Human-readable amount to swap
  slippage: number; // Slippage tolerance, e.g., 0.01 for 1%
}

const checkAndApproveAllowance = async (
  walletClient: any,
  base: Address,
  parsedAmount: bigint,
  headers: any,
): Promise<void> => {
  console.log(`[INFO] Checking allowance for ${base}`);
  const allowanceResponse = await axios.get(
    `${URL.OogaBoogaURL}/v1/approve/allowance`,
    {
      headers,
      params: {
        token: base,
        from: walletClient.account.address,
      },
    },
  );
  console.log(`[DEBUG] Allowance API response:`, allowanceResponse.data);

  if (BigInt(allowanceResponse.data.allowance) < parsedAmount) {
    console.log(`[INFO] Insufficient allowance. Approving ${parsedAmount}`);
    const approveResponse = await axios.get(`${URL.OogaBoogaURL}/v1/approve`, {
      headers,
      params: {
        token: base,
        amount: parsedAmount.toString(),
      },
    });
    console.log(`[DEBUG] Approve API response:`, approveResponse.data);

    const { tx } = approveResponse.data;

    const hash = await walletClient.sendTransaction({
      account: tx.from as Address,
      to: tx.to as Address,
      data: tx.data as `0x${string}`,
    });

    console.log(`[INFO] Sent approve transaction. Hash: ${hash}`);
    const receipt = await walletClient.waitForTransactionReceipt({ hash });

    console.log(`[DEBUG] Approval Receipt:`, receipt);
    if (receipt.status !== "success") {
      throw new Error("Approval transaction failed");
    }
    console.log("Approval complete", receipt.transactionHash, receipt.status);
  } else {
    console.log(`[INFO] Sufficient allowance available.`);
  }
};

const performSwap = async (
  walletClient: any,
  base: Address,
  quote: Address,
  parsedAmount: bigint,
  slippage: number,
  headers: any,
): Promise<string> => {
  try {
    console.log(`[INFO] Fetching swap details from OogaBooga API`);
    const swapResponse = await axios.get(`${URL.OogaBoogaURL}/v1/swap`, {
      headers,
      params: {
        tokenIn: base,
        amount: parsedAmount.toString(),
        tokenOut: quote,
        to: walletClient.account.address,
        slippage,
      },
    });
    const { tx: swapTx } = swapResponse.data;

    console.log("Submitting swap transaction...");
    console.log(`[DEBUG] swap transaction params:`);
    const swapHash = await walletClient.sendTransaction({
      account: walletClient.account.address,
      to: swapTx.to as Address,
      data: swapTx.data as `0x${string}`,
      value: swapTx.value ? BigInt(swapTx.value) : 0n,
    });

    console.log(`[INFO] Sent swap transaction. Hash: ${swapHash}`);
    const swapReceipt = await walletClient.waitForTransactionReceipt({
      hash: swapHash,
    });

    console.log(`[DEBUG] Swap Receipt:`, swapReceipt);
    if (swapReceipt.status !== "success") {
      throw new Error("Swap transaction failed");
    }
    console.log(`[INFO] Swap successful: Transaction hash: ${swapHash}`);
    return swapHash;
  } catch (error: any) {
    console.error(`[ERROR] Swap failed: ${error.message}`);
    throw new Error(`Swap failed: ${error.message}`);
  }
};

// Main tool handler
export const oogaBoogaSwapTool: ToolConfig<OogaBoogaSwapArgs> = {
  definition: {
    type: "function",
    function: {
      name: "ooga_booga_swap",
      description: "Perform a token swap using the OogaBooga API",
      parameters: {
        type: "object",
        properties: {
          base: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "Base token address (token to swap from)",
          },
          quote: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "Quote token address (token to swap to)",
          },
          amount: {
            type: "number",
            description: "The amount of tokens to swap",
          },
          slippage: {
            type: "number",
            description: "The allowed slippage tolerance (0.01 = 1%)",
          },
        },
        required: ["base", "quote", "amount", "slippage"],
      },
    },
  },
  handler: async (args) => {
    if (!process.env.OOGA_BOOGA_API_KEY) {
      throw new Error("OOGA_BOOGA_API_KEY is required.");
    }

    const walletClient = createViemWalletClient();
    const OOGA_BOOGA_API_KEY = process.env.OOGA_BOOGA_API_KEY;
    const headers = { Authorization: `Bearer ${OOGA_BOOGA_API_KEY}` };

    console.log(
      `[INFO] Starting OogaBooga Swap for ${args.amount} of ${args.base} to ${args.quote}`,
    );

    const parsedAmount = await fetchTokenDecimalsAndParseAmount(
      walletClient,
      args.base,
      args.amount,
    );

    await checkAndApproveAllowance(
      walletClient,
      args.base,
      parsedAmount,
      headers,
    );

    return performSwap(
      walletClient,
      args.base,
      args.quote,
      parsedAmount,
      args.slippage,
      headers,
    );
  },
};