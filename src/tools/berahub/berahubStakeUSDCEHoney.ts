import { BerahubVaultABI } from '../../constants/abis/berahubVaultABI';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface BerahubStakeUSDCEHoneyArgs {
  stakeAmount: number;
}

export const berahubStakeUSDCEHoneyTool: ToolConfig<BerahubStakeUSDCEHoneyArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'berahub_stake_usdce_honey',
        description: 'Stake HONEY-USDCE on Berahub',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of HONEY-USDCE to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: BerahubStakeUSDCEHoneyArgs,
      config: ConfigChain,
      walletClient?: WalletClient,
    ) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          config.TOKEN.HONEY_USDCE,
          args.stakeAmount,
        );

        await checkBalance(
          walletClient,
          parsedStakeAmount,
          config.TOKEN.HONEY_USDCE,
        );

        console.log(
          `[INFO] Checking allowance for ${config.TOKEN.HONEY_USDCE}`,
        );

        // check allowance
        await checkAndApproveAllowance(
          walletClient,
          config.TOKEN.HONEY_USDCE,
          config.CONTRACT.BeraHubUSDCEHoney,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.HONEY_USDCE} to ${config.CONTRACT.BeraHubUSDCEHoney}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.BeraHubUSDCEHoney,
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
