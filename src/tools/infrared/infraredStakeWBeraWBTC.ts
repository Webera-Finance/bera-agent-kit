import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { InfraredVaultContractABI } from '../../constants/abis/InfraredVaultContractABI';
import { ConfigChain } from '../../constants/chain';

interface InfraredStakeWBeraWBTCArgs {
  stakeAmount: number;
}

export const infraredStakeWBeraWBTCTool: ToolConfig<InfraredStakeWBeraWBTCArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'infrared_stake_wbera_wbtc',
        description: 'Stake WBera-WBTC on Infrared',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of WBera-WBTC to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: InfraredStakeWBeraWBTCArgs,
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
          config.CONTRACT.InfraredWberaWBTC,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.WBERA_WBTC} to ${config.CONTRACT.InfraredWberaWBTC}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.InfraredWberaWBTC,
          abi: InfraredVaultContractABI,
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
