import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
  getTokenBalance,
} from '../../utils/helpers';
import { InfraredVaultABI } from '../../constants/abis/infraredABI';
import { ConfigChain } from '../../constants/chain';

interface InfraredStakeIBGTArgs {
  stakeAmount: number;
}

export const infraredStakeIBGTTool: ToolConfig<InfraredStakeIBGTArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'infrared_stake_ibgt',
      description: 'Stake iBGT on Infrared',
      parameters: {
        type: 'object',
        properties: {
          stakeAmount: {
            type: 'number',
            description: 'The amount of iBGT to stake',
          },
        },
        required: ['stakeAmount'],
      },
    },
  },
  handler: async (
    args: InfraredStakeIBGTArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      // constants
      const ibgtTokenAddress = config.TOKEN.IBGT;
      const infraredIBGTVaultAddress = config.CONTRACT.InfraredIBGTVault;

      const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        ibgtTokenAddress,
        args.stakeAmount,
      );

      const balance = await getTokenBalance(
        walletClient,
        ibgtTokenAddress,
      );

      if (balance < parsedStakeAmount) {
        throw new Error(
          `Insufficient balance. Required: ${parsedStakeAmount.toString()}, Available: ${balance.toString()}`,
        );
      }

      console.log(`[INFO] Checking allowance for ${ibgtTokenAddress}`);

      // check allowance
      await checkAndApproveAllowance(
        walletClient,
        ibgtTokenAddress,
        config.CONTRACT.InfraredIBGTVault,
        parsedStakeAmount,
      );

      console.log(`[INFO] Staking ${parsedStakeAmount.toString()} iBGT`);

      const tx = await walletClient.writeContract({
        address: infraredIBGTVaultAddress,
        abi: InfraredVaultABI,
        functionName: 'stake',
        args: [parsedStakeAmount],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      // const receipt = await walletClient.waitForTransactionReceipt({
      //   hash: tx as `0x${string}`,
      // });

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
