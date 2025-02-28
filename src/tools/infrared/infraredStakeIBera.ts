import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { fetchTokenDecimalsAndParseAmount } from '../../utils/helpers';
import { ConfigChain } from '../../constants/chain';
import { InfraredIBeraContractABI } from '../../constants/abis/infraredIBeraContractABI';

interface InfraredStakeIBeraArgs {
  stakeAmount: number;
}

export const infraredStakeIBeraTool: ToolConfig<InfraredStakeIBeraArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'infrared_stake_ibera',
      description: 'Stake iBera on Infrared',
      parameters: {
        type: 'object',
        properties: {
          stakeAmount: {
            type: 'number',
            description: 'The amount of iBera to stake',
          },
        },
        required: ['stakeAmount'],
      },
    },
  },
  handler: async (
    args: InfraredStakeIBeraArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      // constants
      const iBeraTokenAddress = config.TOKEN.IBERA;

      const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        iBeraTokenAddress,
        args.stakeAmount,
      );

      // console.log(`[INFO] Checking allowance for ${iBeraTokenAddress}`);

      // // check allowance
      // await checkAndApproveAllowance(
      //   walletClient,
      //   iBeraTokenAddress,
      //   iBeraTokenAddress,
      //   parsedStakeAmount,
      // );

      // console.log(`[INFO] Staking ${parsedStakeAmount.toString()} iBera`);

      const tx = await walletClient.writeContract({
        address: iBeraTokenAddress,
        abi: InfraredIBeraContractABI,
        functionName: 'mint',
        args: [walletClient.account.address],
        chain: walletClient.chain,
        account: walletClient.account,
        value: parsedStakeAmount,
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
