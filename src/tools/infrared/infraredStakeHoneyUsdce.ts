import { WalletClient } from 'viem';
import { InfraredVaultContractABI } from '../../constants/abis//InfraredVaultContractABI';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface InfraredStakeHoneyUsdceArgs {
  stakeAmount: number;
}

export const infraredStakeHoneyUsdceTool: ToolConfig<InfraredStakeHoneyUsdceArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'infrared_stake_honey_usdce',
        description: 'Stake Honey-Usdce on Infrared',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of Honey-Usdce to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: InfraredStakeHoneyUsdceArgs,
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
          `[INFO] Checking allowance for ${config.TOKEN.HONEY_USDCE} to spender ${config.CONTRACT.InfraredHoneyUsdce}`,
        );
        //
        // check allowance
        await checkAndApproveAllowance(
          walletClient,
          config.TOKEN.HONEY_USDCE,
          config.CONTRACT.InfraredHoneyUsdce,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.HONEY_USDCE} to ${config.CONTRACT.InfraredHoneyUsdce}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.InfraredHoneyUsdce,
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
