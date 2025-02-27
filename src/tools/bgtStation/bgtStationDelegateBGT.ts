import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { fetchTokenDecimalsAndParseAmount } from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';
import { BGTABI } from '../../constants/abis/bgtABI';

interface BGTStationDelegateArgs {
  validator: Address;
  amount: number;
}

export const bgtStationDelegateTool: ToolConfig<BGTStationDelegateArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'bgt_station_delegate',
      description: 'Delegate BGT to validator',
      parameters: {
        type: 'object',
        properties: {
          validator: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'The validator address to delegate to.',
          },
          amount: {
            type: 'number',
            minimum: 0,
            description: 'The amount of BGT to delegate.',
          },
        },
        required: ['validator', 'amount'],
      },
    },
  },
  handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      if (!args.validator || args.amount === undefined || args.amount <= 0) {
        throw new Error(
          'Validator address and a positive amount are required.',
        );
      }

      log.info('[INFO] Parsing amount based on token decimals...');
      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        config.TOKEN.BGT,
        args.amount,
      );

      log.info('[INFO] Delegating BGT using queueBoost...');
      const delegateTx = await walletClient.writeContract({
        address: config.TOKEN.BGT,
        abi: BGTABI,
        functionName: 'queueBoost',
        args: [args.validator, parsedAmount],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      // log.info('[INFO] Waiting for transaction receipt...');
      // const receipt = await walletClient.waitForTransactionReceipt({
      //   hash: delegateTx as `0x${string}`,
      // });

      // if (receipt.status !== 'success') {
      //   throw new Error('Delegation transaction failed.');
      // }

      log.info(`[INFO] Delegation successful. Transaction Hash: ${delegateTx}`);
      return delegateTx;
    } catch (error: any) {
      log.error(`[ERROR] Failed to delegate BGT: ${error.message}`);
      throw new Error(`Failed to delegate BGT: ${error.message}`);
    }
  },
};
