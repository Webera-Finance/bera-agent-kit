import { BerahubVaultABI } from '../../constants/abis/berahubVaultABI';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface BerahubStakeWBTCWBeraArgs {
  stakeAmount: number;
}

export const berahubStakeWBTCWBeraTool: ToolConfig<BerahubStakeWBTCWBeraArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'berahub_stake_wbtc_wbera',
        description: 'Stake WBTC-WBera on Berahub',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of WBTC-WBera to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: BerahubStakeWBTCWBeraArgs,
      config: ConfigChain,
      walletClient?: WalletClient,
    ) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          config.TOKEN.WBERA_WBTC,
          args.stakeAmount,
        );

        await checkBalance(
          walletClient,
          parsedStakeAmount,
          config.TOKEN.WBERA_WBTC,
        );

        console.log(`[INFO] Checking allowance for ${config.TOKEN.WBERA_WBTC}`);

        // check allowance
        await checkAndApproveAllowance(
          walletClient,
          config.TOKEN.WBERA_WBTC,
          config.CONTRACT.BeraHubWBTCWBera,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.WBERA_WBTC} to ${config.CONTRACT.BeraHubWBTCWBera}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.BeraHubWBTCWBera,
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
