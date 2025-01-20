"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bendRepayTool = void 0;
const bendABI_1 = require("../../constants/bendABI");
const index_1 = require("../../constants/index");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
exports.bendRepayTool = {
    definition: {
        type: 'function',
        function: {
            name: 'bend_repay',
            description: 'Repay borrowed tokens to Bend Protocol',
            parameters: {
                type: 'object',
                properties: {
                    asset: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Token address to repay',
                    },
                    amount: {
                        type: 'number',
                        description: 'The amount of tokens to repay',
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
            const interestRateMode = BigInt(args.interestRateMode || 2); // Default to variable rate
            // Parse amount with correct decimals
            const parsedAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.asset, args.amount);
            // Check and approve token allowance
            await (0, helpers_1.checkAndApproveAllowance)(walletClient, args.asset, index_1.CONTRACT.Bend, parsedAmount);
            // Execute repay
            const hash = await walletClient.writeContract({
                address: index_1.CONTRACT.Bend,
                abi: bendABI_1.BEND_ABI,
                functionName: 'repay',
                args: [args.asset, parsedAmount, interestRateMode, onBehalfOf],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            logger_1.log.info(`Successfully repaid tokens to Bend. Transaction hash: ${hash}`);
            return hash;
        }
        catch (error) {
            logger_1.log.error(`Bend repay failed: ${error.message}`);
            throw error;
        }
    },
};
//# sourceMappingURL=bendRepay.js.map