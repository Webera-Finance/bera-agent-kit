"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgtStationClaimRewardTool = void 0;
const helpers_1 = require("../../utils/helpers");
const bgtStationABI_1 = require("../../constants/bgtStationABI");
const logger_1 = require("../../utils/logger");
exports.bgtStationClaimRewardTool = {
    definition: {
        type: 'function',
        function: {
            name: 'bgt_station_claim_reward',
            description: 'Claim rewards from a vault in the BGT Station',
            parameters: {
                type: 'object',
                properties: {
                    token: {
                        type: ['string', 'null'],
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The staking token address. If null, vault must be provided.',
                    },
                    vault: {
                        type: ['string', 'null'],
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The vault address. If null, token must be provided.',
                    },
                },
                required: [],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            if (!args.token && !args.vault) {
                throw new Error('Either token or vault address must be provided.');
            }
            const primaryAddress = args.token || args.vault;
            const isVault = !!args.vault;
            logger_1.log.info('[INFO] Detecting vault or token address...');
            const { vaultAddress, stakingTokenAddress } = await (0, helpers_1.fetchVaultAndTokenAddress)(primaryAddress, isVault);
            logger_1.log.info(`[INFO] Resolved Vault Address: ${vaultAddress}`);
            logger_1.log.info(`[INFO] Resolved Staking Token Address: ${stakingTokenAddress}`);
            logger_1.log.info('[INFO] Claiming rewards from the vault...');
            const claimRewardTx = await walletClient.writeContract({
                address: vaultAddress,
                abi: bgtStationABI_1.BerachainRewardsVaultABI,
                functionName: 'getReward',
                args: [walletClient.account.address],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            // const receipt = await walletClient.waitForTransactionReceipt({
            //   hash: claimRewardTx as `0x${string}`,
            // });
            // if (receipt.status !== 'success') {
            //   throw new Error('Claim reward transaction failed.');
            // }
            logger_1.log.info(`[INFO] Claim reward successful. Transaction Hash: ${claimRewardTx}`);
            return claimRewardTx;
        }
        catch (error) {
            logger_1.log.error(`[ERROR] Failed to claim rewards: ${error.message}`);
            throw new Error(`Failed to claim rewards: ${error.message}`);
        }
    },
};
//# sourceMappingURL=bgtStationClaimBGT.js.map