"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oogaBoogaSwapTool = void 0;
const axios_1 = __importDefault(require("axios"));
// import { createViemWalletClient } from "../../utils/createViemWalletClient";
const constants_1 = require("../../constants");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
const checkAndApproveAllowance = async (walletClient, base, parsedAmount, headers) => {
    logger_1.log.info(`[INFO] Checking allowance for ${base}`);
    const allowanceResponse = await axios_1.default.get(`${constants_1.URL.OogaBoogaURL}/v1/approve/allowance`, {
        headers,
        params: {
            token: base,
            from: walletClient.account.address,
        },
    });
    logger_1.log.info(`[DEBUG] Allowance API response:`, allowanceResponse.data);
    if (BigInt(allowanceResponse.data.allowance) < parsedAmount) {
        logger_1.log.info(`[INFO] Insufficient allowance. Approving ${parsedAmount}`);
        const approveResponse = await axios_1.default.get(`${constants_1.URL.OogaBoogaURL}/v1/approve`, {
            headers,
            params: {
                token: base,
                amount: parsedAmount.toString(),
            },
        });
        logger_1.log.info(`[DEBUG] Approve API response:`, approveResponse.data);
        const { tx } = approveResponse.data;
        const hash = await walletClient.sendTransaction({
            account: tx.from,
            to: tx.to,
            data: tx.data,
        });
        logger_1.log.info(`[INFO] Sent approve transaction. Hash: ${hash}`);
        const receipt = await walletClient.waitForTransactionReceipt({ hash });
        logger_1.log.info(`[DEBUG] Approval Receipt:`, receipt);
        if (receipt.status !== 'success') {
            throw new Error('Approval transaction failed');
        }
        logger_1.log.info(`[INFO] Approval complete: ${receipt.transactionHash} ${receipt.status}`);
    }
    else {
        logger_1.log.info(`[INFO] Sufficient allowance available.`);
    }
};
const performSwap = async (walletClient, base, quote, parsedAmount, slippage, headers) => {
    try {
        logger_1.log.info(`[INFO] Fetching swap details from OogaBooga API`);
        const swapResponse = await axios_1.default.get(`${constants_1.URL.OogaBoogaURL}/v1/swap`, {
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
        logger_1.log.info('Submitting swap transaction...');
        logger_1.log.info(`[DEBUG] swap transaction params:`);
        const swapHash = await walletClient.sendTransaction({
            account: walletClient.account.address,
            to: swapTx.to,
            data: swapTx.data,
            value: swapTx.value ? BigInt(swapTx.value) : 0n,
        });
        // log.info(`[INFO] Sent swap transaction. Hash: ${swapHash}`);
        // const swapReceipt = await walletClient.waitForTransactionReceipt({
        //   hash: swapHash,
        // });
        // log.info(`[DEBUG] Swap Receipt: ${swapReceipt}`);
        // if (swapReceipt.status !== "success") {
        //   throw new Error("Swap transaction failed");
        // }
        // log.info(`[INFO] Swap successful: Transaction hash: ${swapHash}`);
        return swapHash;
    }
    catch (error) {
        logger_1.log.error(`[ERROR] Swap failed: ${error.message}`);
        throw new Error(`Swap failed: ${error.message}`);
    }
};
// Main tool handler
exports.oogaBoogaSwapTool = {
    definition: {
        type: 'function',
        function: {
            name: 'ooga_booga_swap',
            description: 'Perform a token swap using the OogaBooga API',
            parameters: {
                type: 'object',
                properties: {
                    base: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Base token address (token to swap from)',
                    },
                    quote: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Quote token address (token to swap to)',
                    },
                    amount: {
                        type: 'number',
                        description: 'The amount of tokens to swap',
                    },
                    slippage: {
                        type: 'number',
                        description: 'The allowed slippage tolerance (0.01 = 1%)',
                    },
                },
                required: ['base', 'quote', 'amount'],
            },
        },
    },
    handler: async (args, walletClient) => {
        if (!process.env.OOGA_BOOGA_API_KEY) {
            throw new Error('OOGA_BOOGA_API_KEY is required.');
        }
        if (!walletClient || !walletClient.account) {
            throw new Error('Wallet client is not provided');
        }
        const OOGA_BOOGA_API_KEY = process.env.OOGA_BOOGA_API_KEY;
        const headers = { Authorization: `Bearer ${OOGA_BOOGA_API_KEY}` };
        logger_1.log.info(`[INFO] Starting OogaBooga Swap for ${args.amount} of ${args.base} to ${args.quote}`);
        const parsedAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.base, args.amount);
        await checkAndApproveAllowance(walletClient, args.base, parsedAmount, headers);
        return performSwap(walletClient, args.base, args.quote, parsedAmount, args.slippage, headers);
    },
};
//# sourceMappingURL=oogaBoogaSwap.js.map