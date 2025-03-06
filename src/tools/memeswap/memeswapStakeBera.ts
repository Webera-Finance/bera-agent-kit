import { WalletClient } from 'viem';
import { parseEther } from 'viem/utils';
import { MemeSwapContractABI } from '../../constants/abis/memeSwapContractABI';
import { ConfigChain } from '../../constants/chain';
import { checkBalance } from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface MemeSwapStakeBeraArgs {
  stakeAmount: number;
}

export const memeSwapStakeBeraTool: ToolConfig<MemeSwapStakeBeraArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'memeswap_stake_bera',
      description: 'Stake Bera on Memeswap',
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
    args: MemeSwapStakeBeraArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      // constants
      const memeSwapContractAddress = config.CONTRACT.MemeswapStakeBera;

      const parsedStakeAmount = parseEther(args.stakeAmount.toString());

      await checkBalance(walletClient, parsedStakeAmount);

      const tx = await walletClient.writeContract({
        address: memeSwapContractAddress,
        abi: MemeSwapContractABI,
        functionName: 'stake',
        args: [walletClient.account.address],
        chain: walletClient.chain,
        account: walletClient.account,
        value: parsedStakeAmount,
      });

      console.log(`[INFO] Stake successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      console.error(`[ERROR] Stake failed: ${error.message}`);
      throw new Error(`Stake failed: ${error.message}`);
    }
  },
};
