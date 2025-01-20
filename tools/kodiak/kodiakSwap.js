"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kodiakSwapTool = void 0;
const viem_1 = require("viem");
const kodiakABI_1 = require("../../constants/kodiakABI");
// import { TokenABI } from '../../constants/tokenABI';
const constants_1 = require("../../constants");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
exports.kodiakSwapTool = {
    definition: {
        type: 'function',
        function: {
            name: 'kodiak_swap',
            description: 'Perform a token swap on Kodiak',
            parameters: {
                type: 'object',
                properties: {
                    amountIn: {
                        type: 'number',
                        description: 'The amount of input tokens to swap',
                    },
                    amountOutMin: {
                        type: 'number',
                        description: 'The minimum amount of output tokens expected',
                    },
                    tokenIn: {
                        type: ['string'],
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Address of the input token (optional, defaults to bera native token if null)',
                    },
                    tokenOut: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Address of the output token',
                    },
                    to: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: "The optional recipient's public address for the output tokens",
                    },
                },
                required: ['amountIn', 'amountOutMin', 'tokenOut'],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            const recipient = args.to || walletClient.account.address;
            const isNativeSwap = !args.tokenIn;
            logger_1.log.info(`[INFO] Initiating Kodiak swap: ${args.amountIn} ${isNativeSwap ? 'BERA' : args.tokenIn} for ${args.tokenOut} to ${recipient}`);
            const deadline = Math.floor(Date.now() / 1000) + 1200;
            let tx;
            const inputTokenDecimals = await (0, helpers_1.fetchTokenDecimals)(walletClient, args.tokenIn);
            if (isNativeSwap) {
                const parsedAmountOutMin = (0, viem_1.parseUnits)(args.amountOutMin.toString(), Number(inputTokenDecimals));
                tx = await walletClient.writeContract({
                    address: constants_1.CONTRACT.KodiakUniswapV2Router02,
                    abi: kodiakABI_1.KodiakUniswapV2Router02ABI,
                    functionName: 'swapExactETHForTokens',
                    args: [
                        parsedAmountOutMin,
                        [constants_1.TOKEN.WBERA, args.tokenOut],
                        recipient,
                        BigInt(deadline),
                    ],
                    chain: walletClient.chain,
                    account: walletClient.account,
                    value: (0, viem_1.parseUnits)(args.amountIn.toString(), Number(inputTokenDecimals)),
                });
            }
            else {
                const parsedAmountIn = (0, viem_1.parseUnits)(args.amountIn.toString(), Number(inputTokenDecimals));
                const parsedAmountOutMin = (0, viem_1.parseUnits)(args.amountOutMin.toString(), Number(inputTokenDecimals));
                await (0, helpers_1.checkAndApproveAllowance)(walletClient, args.tokenIn, constants_1.CONTRACT.KodiakSwapRouter02, parsedAmountIn);
                tx = await walletClient.writeContract({
                    address: constants_1.CONTRACT.KodiakSwapRouter02,
                    abi: kodiakABI_1.KodiakSwapRouter02ABI,
                    functionName: 'swapExactTokensForTokens',
                    args: [
                        parsedAmountIn,
                        parsedAmountOutMin,
                        [args.tokenIn, args.tokenOut],
                        recipient,
                    ],
                    chain: walletClient.chain,
                    account: walletClient.account,
                });
            }
            // const receipt = await walletClient.waitForTransactionReceipt({
            //   hash: tx as `0x${string}`,
            // });
            // if (receipt.status !== "success") {
            //   throw new Error(
            //     `Swap transaction failed with status: ${receipt.status}`,
            //   );
            // }
            logger_1.log.info(`[INFO] Kodiak swap successful: Transaction hash: ${tx}`);
            return tx;
        }
        catch (error) {
            logger_1.log.error(`[ERROR] Kodiak swap failed: ${error.message}`);
            throw new Error(`Swap failed: ${error.message}`);
        }
    },
};
//# sourceMappingURL=kodiakSwap.js.map