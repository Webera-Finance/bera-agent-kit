import { Abi, WalletClient } from 'viem';
import { InfraredVaultABI } from '../../constants/abis/infraredABI';
import { ConfigChain } from '../../constants/chain';
import { checkBalance, fetchTokenDecimalsAndParseAmount } from '../../utils/helpers';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';

interface InfraredWithdrawStakedIBGTArgs {
  withdrawAmount: number;
}

export const infraredWithdrawStakedIBGTTool: ToolConfig<InfraredWithdrawStakedIBGTArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'infrared_withdraw_staked_ibgt',
      description: 'Withdraw staked iBGT on Infrared',
      parameters: {
        type: 'object',
        properties: {
          withdrawAmount: {
            type: 'number',
            description: 'The amount of iBGT to withdraw from Infrared',
          },
        },
        required: ['withdrawAmount'],
      },
    },
  },
  handler: async (
    args: InfraredWithdrawStakedIBGTArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      const ibgtTokenAddress = config.TOKEN.IBGT;
      const infraredIBGTVaultAddress = config.CONTRACT.InfraredIBGTVault;

      const parsedWithdrawAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        ibgtTokenAddress,
        args.withdrawAmount,
      );

      log.info(`Checking balance for ${infraredIBGTVaultAddress}`);
      
      await checkBalance(
        walletClient,
        parsedWithdrawAmount,
        infraredIBGTVaultAddress,
        InfraredVaultABI as Abi,
      );

      log.info(`Withdrawing ${parsedWithdrawAmount.toString()} iBGT from ${infraredIBGTVaultAddress}`);

      const tx = await walletClient.writeContract({
        address: infraredIBGTVaultAddress,
        abi: InfraredVaultABI,
        functionName: 'withdraw',
        args: [parsedWithdrawAmount],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      log.info(`Withdraw successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      log.error(`Withdraw failed: ${error.message}`);
      throw new Error(`Withdraw failed: ${error.message}`);
    }
  },
};
