import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';

import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
  fetchVaultAndTokenAddress,
} from '../../utils/helpers';
import { BerachainRewardsVaultABI } from '../../constants/abis/bgtStationABI';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';

interface BGTStationStakeArgs {
  token?: Address;
  vault?: Address;
  amount: number;
}

export const bgtStationStakeTool: ToolConfig<BGTStationStakeArgs> = {
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
            description:
              'The staking token address. If null, vault must be provided.',
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
  handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
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
        await fetchVaultAndTokenAddress(primaryAddress!, isVault, config);
      log.info(`[INFO] Resolved Vault Address: ${vaultAddress}`);
      log.info(`[INFO] Resolved Staking Token Address: ${stakingTokenAddress}`);

      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        stakingTokenAddress,
        args.amount,
      );

      await checkBalance(
        walletClient,
        parsedAmount,
        stakingTokenAddress,
      );

      await checkAndApproveAllowance(
        walletClient,
        stakingTokenAddress,
        vaultAddress,
        parsedAmount,
      );

      // Stake the token into the vault
      log.info('[INFO] Staking token into vault...');
      const stakeTx = await walletClient.writeContract({
        address: vaultAddress,
        abi: BerachainRewardsVaultABI,
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

      log.info(`[INFO] Stake successful. Transaction Hash: ${stakeTx}`);
      return stakeTx;
    } catch (error: any) {
      log.error(`[ERROR] ${error.message}`);
      throw error;
    }
  },
};
