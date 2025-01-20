"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kodiakAddLiquidityTool = void 0;
const kodiakABI_1 = require("../../constants/kodiakABI");
const constants_1 = require("../../constants");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
exports.kodiakAddLiquidityTool = {
    definition: {
        type: 'function',
        function: {
            name: 'kodiak_add_liquidity',
            description: 'Add liquidity to a liquidity pool on Kodiak',
            parameters: {
                type: 'object',
                properties: {
                    tokenA: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Address of the first token',
                    },
                    tokenB: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Address of the second token',
                    },
                    amountADesired: {
                        type: 'number',
                        description: 'The desired amount of token A',
                    },
                    amountBDesired: {
                        type: 'number',
                        description: 'The desired amount of token B',
                    },
                    amountAMin: {
                        type: 'number',
                        description: 'The minimum amount of token A',
                    },
                    amountBMin: {
                        type: 'number',
                        description: 'The minimum amount of token B',
                    },
                    to: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: "The recipient's address (optional)",
                    },
                },
                required: [
                    'tokenA',
                    'tokenB',
                    'amountADesired',
                    'amountBDesired',
                    'amountAMin',
                    'amountBMin',
                ],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            // const publicClient = createViemPublicClient();
            const recipient = args.to || walletClient.account.address;
            logger_1.log.info(`[INFO] Adding liquidity: ${args.amountADesired} ${args.tokenA} and ${args.amountBDesired} ${args.tokenB} for ${recipient}`);
            const deadline = Math.floor(Date.now() / 1000) + 1200;
            const parsedAmountADesired = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.tokenA, args.amountADesired);
            const parsedAmountBDesired = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.tokenB, args.amountBDesired);
            const parsedAmountAMin = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.tokenA, args.amountAMin);
            const parsedAmountBMin = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.tokenB, args.amountBMin);
            await (0, helpers_1.checkAndApproveAllowance)(walletClient, args.tokenA, constants_1.CONTRACT.KodiakSwapRouter02, parsedAmountADesired);
            await (0, helpers_1.checkAndApproveAllowance)(walletClient, args.tokenB, constants_1.CONTRACT.KodiakSwapRouter02, parsedAmountBDesired);
            const tx = await walletClient.writeContract({
                address: constants_1.CONTRACT.KodiakSwapRouter02,
                abi: kodiakABI_1.KodiakUniswapV2Router02ABI,
                functionName: 'addLiquidity',
                args: [
                    args.tokenA,
                    args.tokenB,
                    parsedAmountADesired,
                    parsedAmountBDesired,
                    parsedAmountAMin,
                    parsedAmountBMin,
                    recipient,
                    BigInt(deadline),
                ],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            // const receipt = await walletClient.waitForTransactionReceipt({
            //   hash: tx as `0x${string}`,
            // });
            // if (receipt.status !== 'success') {
            //   throw new Error(
            //     `Add liquidity transaction failed with status: ${receipt.status}`,
            //   );
            // }
            logger_1.log.info(`[INFO] Liquidity added successfully: Transaction hash: ${tx}`);
            return tx;
        }
        catch (error) {
            logger_1.log.error(`[ERROR] Adding liquidity failed: ${error.message}`);
            throw new Error(`Add liquidity failed: ${error.message}`);
        }
    },
};
//# sourceMappingURL=kodiakAddLiquidityV2.js.map