import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { InfraredVaultContractABI } from '../../constants/abis/InfraredVaultContractABI';
import { ConfigChain } from '../../constants/chain';

interface InfraredStakeWBeraWETHArgs {
  stakeAmount: number;
}

export const infraredStakeWBeraWETHTool: ToolConfig<InfraredStakeWBeraWETHArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'infrared_stake_wbera_weth',
        description: 'Stake WBera-WETH on Infrared',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of WBera-WETH to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: InfraredStakeWBeraWETHArgs,
      config: ConfigChain,
      walletClient?: WalletClient,
    ) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          config.TOKEN.WBERA_WETH,
          args.stakeAmount,
        );

        await checkBalance(
          walletClient,
          parsedStakeAmount,
          config.TOKEN.WBERA_WETH,
        );
        
        console.log(`[INFO] Checking allowance for ${config.TOKEN.WBERA_WETH}`);

        // check allowance
        await checkAndApproveAllowance(
          walletClient,
          config.TOKEN.WBERA_WETH,
          config.CONTRACT.InfraredWberaWETH,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.WBERA_WETH} to ${config.CONTRACT.InfraredWberaWETH}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.InfraredWberaWETH,
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
