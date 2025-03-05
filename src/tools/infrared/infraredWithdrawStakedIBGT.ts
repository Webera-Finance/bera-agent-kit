import { Abi, PublicClient, WalletClient } from 'viem';
import { InfraredVaultABI } from '../../constants/abis/infraredABI';
import { ConfigChain } from '../../constants/chain';
import {
  checkBalance,
  // checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface InfraredWithdrawStakedIBGTArgs {
  withdrawAmount: number;
}

export const infraredWithdrawStakedIBGTTool: ToolConfig<InfraredWithdrawStakedIBGTArgs> =
  {
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
      publicClient?: PublicClient,
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

        console.log(`[INFO] Checking allowance for ${ibgtTokenAddress}`);
        
        await checkBalance(
          walletClient,
          parsedWithdrawAmount,
          infraredIBGTVaultAddress,
          InfraredVaultABI as Abi,
        );

        // check staked iBGT amount
        // const stakedIBGT = (await newPublicClient.readContract({
        //   address: infraredIBGTVaultAddress,
        //   abi: InfraredVaultABI,
        //   functionName: 'balanceOf',
        //   args: [walletClient.account.address],
        // })) as bigint;

        // if (parsedWithdrawAmount > stakedIBGT) {
        //   throw new Error(
        //     `Withdraw amount exceeds staked iBGT amount: 
        //     - staked iBGT: ${stakedIBGT.toString()}
        //     - withdraw amount: ${parsedWithdrawAmount.toString()}`,
        //   );
        // }

        console.log(
          `[INFO] Withdrawing ${parsedWithdrawAmount.toString()} iBGT`,
        );

        const tx = await walletClient.writeContract({
          address: infraredIBGTVaultAddress,
          abi: InfraredVaultABI,
          functionName: 'withdraw',
          args: [parsedWithdrawAmount],
          chain: walletClient.chain,
          account: walletClient.account,
        });

        // const receipt = await walletClient.waitForTransactionReceipt({
        //   hash: tx as `0x${string}`,
        // });

        // if (receipt.status !== 'success') {
        //   throw new Error(
        //     `Withdraw transaction failed with status: ${receipt.status}`,
        //   );
        // }

        console.log(`[INFO] Withdraw successful: Transaction hash: ${tx}`);
        return tx;
      } catch (error: any) {
        console.error(`[ERROR] Withdraw failed: ${error.message}`);
        throw new Error(`Withdraw failed: ${error.message}`);
      }
    },
  };
