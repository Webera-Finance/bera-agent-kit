import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { ConfigChain } from '../../constants/chain';
import { InfraredIBeraContractABI } from '../../constants/abis/infraredIBeraContractABI';
import { parseEther } from 'viem/utils';
import { checkBalance } from '../../utils/helpers';
import { log } from '../../utils/logger';
interface InfraredStakeBeraArgs {
  stakeAmount: number;
}

export const infraredStakeBeraTool: ToolConfig<InfraredStakeBeraArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'infrared_stake_bera',
      description: 'Stake Bera to receive iBera on Infrared',
      parameters: {
        type: 'object',
        properties: {
          stakeAmount: {
            type: 'number',
            description: 'The amount of Bera to stake',
          },
        },
        required: ['stakeAmount'],
      },
    },
  },
  handler: async (
    args: InfraredStakeBeraArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      // constants
      const iBeraContractAddress = config.CONTRACT.IBera;

      const parsedStakeAmount = parseEther(args.stakeAmount.toString());
      
      await checkBalance(
        walletClient,
        parsedStakeAmount,
      );

      const tx = await walletClient.writeContract({
        address: iBeraContractAddress,
        abi: InfraredIBeraContractABI,
        functionName: 'mint',
        args: [walletClient.account.address],
        chain: walletClient.chain,
        account: walletClient.account,
        value: parsedStakeAmount,
      });

      log.info(`[INFO] Stake successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      console.error(`[ERROR] Stake failed: ${error.message}`);
      throw new Error(`Stake failed: ${error.message}`);
    }
  },
};
