"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bexSwapTool = void 0;
const axios_1 = __importDefault(require("axios"));
const bexABI_1 = require("../../constants/bexABI");
const constants_1 = require("../../constants");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
const utils_1 = require("bera-agent-kit/utils");
exports.bexSwapTool = {
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
                        description: 'Quote token address. If null/undefined, default is BERA native token',
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
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            const publicClient = (0, utils_1.createViemPublicClient)();
            const parsedAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.quote, args.amount);
            logger_1.log.info(`[INFO] Checking allowance for ${args.quote}`);
            await (0, helpers_1.checkAndApproveAllowance)(walletClient, args.quote, constants_1.CONTRACT.BeraCrocMultiSwap, parsedAmount);
            const quoteBexRouteAddress = args.quote === constants_1.TOKEN.BERA ? constants_1.TOKEN.WBERA : args.quote;
            // Fetch swap route
            const routeApiUrl = `${constants_1.URL.BEXRouteURL}?fromAsset=${quoteBexRouteAddress}&toAsset=${args.base}&amount=${parsedAmount.toString()}`;
            logger_1.log.info(`[INFO] request route: ${routeApiUrl}`);
            const response = await axios_1.default.get(routeApiUrl);
            if (response.status !== 200 || !response.data) {
                throw new Error(`Failed to fetch swap steps from API`);
            }
            const steps = response.data.steps.map((step) => ({
                poolIdx: step.poolIdx,
                base: step.base,
                quote: args.quote === constants_1.TOKEN.BERA ? constants_1.TOKEN.BERA : step.quote,
                isBuy: step.isBuy,
            }));
            if (!steps.length) {
                throw new Error(`No valid swap steps returned from the API`);
            }
            logger_1.log.info(`[INFO] Swap steps fetched:`, steps);
            const parsedMinOut = BigInt('0'); //TODO: calculate min out
            const estimatedGas = await publicClient.estimateContractGas({
                address: constants_1.CONTRACT.BeraCrocMultiSwap,
                abi: bexABI_1.BeraCrocMultiSwapABI,
                functionName: 'multiSwap',
                args: [steps, parsedAmount, parsedMinOut],
                account: walletClient.account,
                value: steps.some((step) => step.quote === constants_1.TOKEN.BERA)
                    ? parsedAmount
                    : undefined,
            });
            const tx = await walletClient.writeContract({
                address: constants_1.CONTRACT.BeraCrocMultiSwap,
                abi: bexABI_1.BeraCrocMultiSwapABI,
                functionName: 'multiSwap',
                args: [steps, parsedAmount, parsedMinOut],
                chain: walletClient.chain,
                account: walletClient.account,
                value: steps.some((step) => step.quote === constants_1.TOKEN.BERA)
                    ? parsedAmount
                    : undefined,
                gas: estimatedGas,
            });
            logger_1.log.info(`[INFO] Swap successful: Transaction hash: ${tx}`);
            return tx;
        }
        catch (error) {
            logger_1.log.error(`[ERROR] Swap failed: ${error.message}`);
            throw new Error(`Swap failed: ${error.message}`);
        }
    },
};
//# sourceMappingURL=bexSwap.js.map