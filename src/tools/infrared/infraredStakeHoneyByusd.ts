import { WalletClient } from 'viem';
import { InfraredVaultContractABI } from '../../constants/abis/InfraredVaultContractABI';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface InfraredStakeHoneyByusdArgs {
  stakeAmount: number;
}

export const infraredStakeHoneyByusdTool: ToolConfig<InfraredStakeHoneyByusdArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'infrared_stake_honey_byusd',
        description: 'Stake Honey-BYUSD on Infrared',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of Honey-BYUSD to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: InfraredStakeHoneyByusdArgs,
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
          config.CONTRACT.InfraredHoneyByusd,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.HONEY_BYUSD} to ${config.CONTRACT.InfraredHoneyByusd}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.InfraredHoneyByusd,
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
