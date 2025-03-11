import { BerahubVaultABI } from '../../constants/abis/berahubVaultABI';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface BerahubStakeBYUSDHoneyArgs {
  stakeAmount: number;
}

export const berahubStakeBYUSDHoneyTool: ToolConfig<BerahubStakeBYUSDHoneyArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'berahub_stake_byusd_honey',
        description: 'Stake BYUSD-Honey on Berahub',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of BYUSD-Honey to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: BerahubStakeBYUSDHoneyArgs,
      config: ConfigChain,
      walletClient?: WalletClient,
    ) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          config.TOKEN.HONEY_BYUSD,
          args.stakeAmount,
        );

        await checkBalance(
          walletClient,
          parsedStakeAmount,
          config.TOKEN.HONEY_BYUSD,
        );

        console.log(
          `[INFO] Checking allowance for ${config.TOKEN.HONEY_BYUSD}`,
        );

        // check allowance
        await checkAndApproveAllowance(
          walletClient,
          config.TOKEN.HONEY_BYUSD,
          config.CONTRACT.BeraHubBYUSDHoney,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.HONEY_BYUSD} to ${config.CONTRACT.BeraHubBYUSDHoney}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.BeraHubBYUSDHoney,
          abi: BerahubVaultABI,
          functionName: 'stake',
          args: [parsedStakeAmount],
          chain: walletClient.chain,
          account: walletClient.account,
        });

        console.log(`[INFO] Stake successful: Transaction hash: ${tx}`);
        return tx;
      } catch (error: any) {
        console.error(`[ERROR] Stake failed: ${error.message}`);
        throw new Error(`Stake failed: ${error.message}`);
      }
    },
  };
