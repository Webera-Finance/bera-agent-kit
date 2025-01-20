"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgtStationStakeTool = void 0;
const helpers_1 = require("../../utils/helpers");
const bgtStationABI_1 = require("../../constants/bgtStationABI");
const logger_1 = require("../../utils/logger");
exports.bgtStationStakeTool = {
    definition: {
        type: 'function',
        function: {
            name: 'bgt_station_stake',
            description: 'Stake tokens into a vault in the BGT Station',
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
                    amount: {
                        type: 'number',
                        description: 'The human-readable amount of tokens to stake.',
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
            if (!args.token && !args.vault) {
                throw new Error('Either token or vault address must be provided.');
            }
            const primaryAddress = args.token || args.vault;
            const isVault = !!args.vault;
            logger_1.log.info('[INFO] Detecting vault or token address...');
            const { vaultAddress, stakingTokenAddress } = await (0, helpers_1.fetchVaultAndTokenAddress)(primaryAddress, isVault);
            logger_1.log.info(`[INFO] Resolved Vault Address: ${vaultAddress}`);
            logger_1.log.info(`[INFO] Resolved Staking Token Address: ${stakingTokenAddress}`);
            const parsedAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, stakingTokenAddress, args.amount);
            logger_1.log.info('[INFO] Checking allowance...');
            await (0, helpers_1.checkAndApproveAllowance)(walletClient, stakingTokenAddress, vaultAddress, parsedAmount);
            // Stake the token into the vault
            logger_1.log.info('[INFO] Staking token into vault...');
            const stakeTx = await walletClient.writeContract({
                address: vaultAddress,
                abi: bgtStationABI_1.BerachainRewardsVaultABI,
                functionName: 'stake',
                args: [parsedAmount],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            // const stakeReceipt = await walletClient.waitForTransactionReceipt({
            //   hash: stakeTx as `0x${string}`,
            // });
            // if (stakeReceipt.status !== 'success') {
            //   throw new Error('Stake transaction failed.');
            // }
            logger_1.log.info(`[INFO] Stake successful. Transaction Hash: ${stakeTx}`);
            return stakeTx;
        }
        catch (error) {
            logger_1.log.error(`[ERROR] ${error.message}`);
            throw error;
        }
    },
};
//# sourceMappingURL=bgtStationStake.js.map