"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgtStationRedeemTool = void 0;
const tokenABI_1 = require("../../constants/tokenABI");
const constants_1 = require("../../constants");
const helpers_1 = require("../../utils/helpers");
const logger_1 = require("../../utils/logger");
exports.bgtStationRedeemTool = {
    definition: {
        type: 'function',
        function: {
            name: 'bgt_station_redeem',
            description: 'Redeem BGT to receiver, defaults to wallet client account',
            parameters: {
                type: 'object',
                properties: {
                    receiver: {
                        type: ['string', 'null'],
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The receiver address to send redeemed BGT. Defaults to wallet client account if null.',
                    },
                    amount: {
                        type: 'number',
                        minimum: 0,
                        description: 'The amount of BGT to redeem.',
                    },
                },
                required: ['amount'],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            if (args.amount === undefined || args.amount <= 0) {
                throw new Error('A positive amount is required.');
            }
            const receiver = args.receiver || walletClient.account.address;
            logger_1.log.info('[INFO] Parsing amount based on token decimals...');
            const parsedAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, constants_1.TOKEN.BGT, args.amount);
            logger_1.log.info(`[INFO] Redeeming BGT to receiver: ${receiver}...`);
            const redeemTx = await walletClient.writeContract({
                address: constants_1.TOKEN.BGT,
                abi: tokenABI_1.BGTABI,
                functionName: 'redeem',
                args: [receiver, parsedAmount],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            // log.info('[INFO] Waiting for transaction receipt...');
            // const receipt = await walletClient.waitForTransactionReceipt({
            //   hash: redeemTx as `0x${string}`,
            // });
            // if (receipt.status !== 'success') {
            //   throw new Error('Redemption transaction failed.');
            // }
            logger_1.log.info(`[INFO] Redemption successful. Transaction Hash: ${redeemTx}`);
            return redeemTx;
        }
        catch (error) {
            logger_1.log.error(`[ERROR] Failed to redeem BGT: ${error.message}`);
            throw new Error(`Failed to redeem BGT: ${error.message}`);
        }
    },
};
//# sourceMappingURL=bgtStationRedeem.js.map