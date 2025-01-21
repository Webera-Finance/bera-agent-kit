import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { fetchVaultAndTokenAddress } from '../../utils/helpers';
import { BerachainRewardsVaultABI } from '../../constants/bgtStationABI';
import { log } from '../../utils/logger';

interface BGTStationClaimRewardArgs {
  token?: Address; // Staking token address (optional)
  vault?: Address; // Vault address (optional)
}

export const bgtStationClaimRewardTool: ToolConfig<BGTStationClaimRewardArgs> =
  {
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
              description:
                'The staking token address. If null, vault must be provided.',
            },
            vault: {
              type: ['string', 'null'],
              pattern: '^0x[a-fA-F0-9]{40}$',
              description:
                'The vault address. If null, token must be provided.',
            },
          },
          required: [],
        },
      },
    },
    handler: async (args, walletClient?: WalletClient) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        if (!args.token && !args.vault) {
          throw new Error('Either token or vault address must be provided.');
        }

        const primaryAddress = args.token || args.vault;
        const isVault = !!args.vault;

        log.info('[INFO] Detecting vault or token address...');
        const { vaultAddress, stakingTokenAddress } =
          await fetchVaultAndTokenAddress(primaryAddress!, isVault);
        log.info(`[INFO] Resolved Vault Address: ${vaultAddress}`);
        log.info(
          `[INFO] Resolved Staking Token Address: ${stakingTokenAddress}`,
        );

        log.info('[INFO] Claiming rewards from the vault...');
        const claimRewardTx = await walletClient.writeContract({
          address: vaultAddress,
          abi: BerachainRewardsVaultABI,
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

        log.info(
          `[INFO] Claim reward successful. Transaction Hash: ${claimRewardTx}`,
        );
        return claimRewardTx;
      } catch (error: any) {
        log.error(`[ERROR] Failed to claim rewards: ${error.message}`);
        throw new Error(`Failed to claim rewards: ${error.message}`);
      }
    },
  };
