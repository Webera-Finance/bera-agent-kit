"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bendSupplyTool = void 0;
const bendABI_1 = require("../../constants/bendABI");
const index_1 = require("../../constants/index");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
exports.bendSupplyTool = {
    definition: {
        type: 'function',
        function: {
            name: 'bend_supply',
            description: 'Supply (deposit) tokens to Bend Protocol',
            parameters: {
                type: 'object',
                properties: {
                    asset: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Token address to supply',
                    },
                    amount: {
                        type: 'number',
                        description: 'The amount of tokens to supply',
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
            // Check and approve allowance if needed
            await (0, helpers_1.checkAndApproveAllowance)(walletClient, args.asset, index_1.CONTRACT.Bend, parsedAmount);
            // Execute supply transaction
            const hash = await walletClient.writeContract({
                address: index_1.CONTRACT.Bend,
                abi: bendABI_1.BEND_ABI,
                functionName: 'supply',
                args: [args.asset, parsedAmount, onBehalfOf, 0], // referralCode set to 0
                chain: walletClient.chain,
                account: walletClient.account,
            });
            logger_1.log.info(`Successfully supplied tokens to Bend. Transaction hash: ${hash}`);
            return hash;
        }
        catch (error) {
            logger_1.log.error(`Bend supply failed: ${error.message}`);
            throw error;
        }
    },
};
//# sourceMappingURL=bendSupply.js.map