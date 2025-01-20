"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bendWithdrawTool = void 0;
const bendABI_1 = require("../../constants/bendABI");
const index_1 = require("../../constants/index");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
exports.bendWithdrawTool = {
    definition: {
        type: 'function',
        function: {
            name: 'bend_withdraw',
            description: 'Withdraw tokens from Bend Protocol',
            parameters: {
                type: 'object',
                properties: {
                    asset: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Token address to withdraw',
                    },
                    amount: {
                        type: 'number',
                        description: 'The amount of tokens to withdraw',
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
            // Parse amount with correct decimals
            const parsedAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, args.asset, args.amount);
            // Execute withdraw
            const hash = await walletClient.writeContract({
                address: index_1.CONTRACT.Bend,
                abi: bendABI_1.BEND_ABI,
                functionName: 'withdraw',
                args: [args.asset, parsedAmount, onBehalfOf],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            logger_1.log.info(`Successfully withdrew tokens from Bend. Transaction hash: ${hash}`);
            return hash;
        }
        catch (error) {
            logger_1.log.error(`Bend withdraw failed: ${error.message}`);
            throw error;
        }
    },
};
//# sourceMappingURL=bendWithdraw.js.map