import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { BeraborrowPoolABI } from '../../constants/abis/beraborrowPoolABI';
import { ConfigChain } from '../../constants/chain';
import {
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { log } from '../../utils/logger';

interface BeraborrowDepositNectArgs {
  amount: number;
}

export const beraborrowDepositNectTool: ToolConfig<BeraborrowDepositNectArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'beraborrow_deposit_nect',
        description: 'Deposit Nectar into the Beraborrow Pool',
        parameters: {
          type: 'object',
          properties: {
            amount: {
              type: 'number',
              description: 'The human-readable amount of tokens to stake.',
            },
          },
          required: ['amount'],
        },
      },
    },
    handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        const parsedAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          config.TOKEN.NECTAR,
          args.amount,
        );

        await checkBalance(walletClient, parsedAmount, config.TOKEN.NECTAR);

        // Deposit token into the pool
        log.info('[INFO] Staking token into vault...');
        const stakeTx = await walletClient.writeContract({
          address: config.CONTRACT.BeraBorrowPool,
          abi: BeraborrowPoolABI,
          functionName: 'deposit',
          args: [parsedAmount, walletClient.account.address],
          chain: walletClient.chain,
          account: walletClient.account,
        });

        // const stakeReceipt = await walletClient.waitForTransactionReceipt({
        //   hash: stakeTx as `0x${string}`,
        // });

        // if (stakeReceipt.status !== 'success') {
        //   throw new Error('Stake transaction failed.');
        // }

        log.info(`[INFO] Deposit successful. Transaction Hash: ${stakeTx}`);
        return stakeTx;
      } catch (error: any) {
        log.error(`[ERROR] ${error.message}`);
        throw error;
      }
    },
  };
