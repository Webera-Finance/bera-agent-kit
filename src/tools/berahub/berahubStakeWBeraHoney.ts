import { BerahubVaultABI } from '../../constants/abis/berahubVaultABI';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface BerahubStakeWBeraHoneyArgs {
  stakeAmount: number;
}

export const berahubStakeWBeraHoneyTool: ToolConfig<BerahubStakeWBeraHoneyArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'berahub_stake_wbera_honey',
        description: 'Stake WBera-Honey on Berahub',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of WBera-Honey to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: BerahubStakeWBeraHoneyArgs,
      config: ConfigChain,
      walletClient?: WalletClient,
    ) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          config.TOKEN.HONEY_WBERA,
          args.stakeAmount,
        );

        await checkBalance(
          walletClient,
          parsedStakeAmount,
          config.TOKEN.HONEY_WBERA,
        );

        console.log(
          `[INFO] Checking allowance for ${config.TOKEN.HONEY_WBERA}`,
        );

        // check allowance
        await checkAndApproveAllowance(
          walletClient,
          config.TOKEN.HONEY_WBERA,
          config.CONTRACT.BeraHubHoneyWBera,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.HONEY_WBERA} to ${config.CONTRACT.InfraredHoneyWBera}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.BeraHubHoneyWBera,
          abi: BerahubVaultABI,
          functionName: 'stake',
          args: [parsedStakeAmount],
          chain: walletClient.chain,
          account: walletClient.account,
        });

        // const receipt = await walletClient.waitForTransactionReceipt({
        //   hash: tx as `0x${string}`,
        // });
        //
        // if (receipt.status !== 'success') {
        //   throw new Error(
        //     `Stake transaction failed with status: ${receipt.status}`,
        //   );
        // }

        console.log(`[INFO] Stake successful: Transaction hash: ${tx}`);
        return tx;
      } catch (error: any) {
        console.error(`[ERROR] Stake failed: ${error.message}`);
        throw new Error(`Stake failed: ${error.message}`);
      }
    },
  };
