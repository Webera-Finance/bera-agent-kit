"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bendBorrowTool = void 0;
const bendABI_1 = require("../../constants/bendABI");
const index_1 = require("../../constants/index");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
exports.bendBorrowTool = {
    definition: {
        type: 'function',
        function: {
            name: 'bend_borrow',
            description: 'Borrow tokens from Bend Protocol',
            parameters: {
                type: 'object',
                properties: {
                    asset: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Token address to borrow',
                    },
                    amount: {
                        type: 'number',
                        description: 'The amount of tokens to borrow',
                    },
                    interestRateMode: {
                        type: 'number',
                        enum: [1, 2],
                        description: 'Interest rate mode (1 for stable, 2 for variable)',
                        default: 2,
                    },
                },
                required: ['asset', 'amount'],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            const onBehalfOf = walletClient.account.address;
            const referralCode = 0;
            const interestRateMode = BigInt(args.interestRateMode || 2); // Default to variable rate
            // Parse amount with correct decimals
            const parsedAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.asset, args.amount);
            // Execute borrow
            const hash = await walletClient.writeContract({
                address: index_1.CONTRACT.Bend,
                abi: bendABI_1.BEND_ABI,
                functionName: 'borrow',
                args: [
                    args.asset,
                    parsedAmount,
                    interestRateMode,
                    referralCode,
                    onBehalfOf,
                ],
                account: walletClient.account,
                chain: walletClient.chain,
            });
            logger_1.log.info(`Successfully borrowed tokens from Bend. Transaction hash: ${hash}`);
            return hash;
        }
        catch (error) {
            logger_1.log.error(`Bend borrow failed: ${error.message}`);
            throw error;
        }
    },
};
//# sourceMappingURL=bendBorrow.js.map