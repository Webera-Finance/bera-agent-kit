import { WalletClient } from 'viem';
import { BGTABI } from '../../constants/abis/bgtABI';
import { ConfigChain } from '../../constants/chain';
import {
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ToolConfig } from '../allTools';

interface BerahubRedeemBGTArgs {
  receiver?: string;
  amount: number;
}

export const berahubRedeemBGTTool: ToolConfig<BerahubRedeemBGTArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'berahub_redeem_bgt',
      description: 'Redeem BGT to receiver, defaults to wallet client account',
      parameters: {
        type: 'object',
        properties: {
          receiver: {
            type: ['string', 'null'],
            pattern: '^0x[a-fA-F0-9]{40}$',
            description:
              'The receiver address to send redeemed BGT. Defaults to wallet client account if null.',
          },
          amount: {
            type: 'number',
            minimum: 0,
            description: 'The amount of BGT to redeem.',
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

      if (args.amount === undefined || args.amount <= 0) {
        throw new Error('A positive amount is required.');
      }

      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        config.TOKEN.BGT,
        args.amount,
      );

      await checkBalance(walletClient, parsedAmount, config.TOKEN.BGT);

      const receiver = args.receiver || walletClient.account.address;

      log.info(`[INFO] Redeeming BGT to receiver: ${receiver}...`);
      const redeemTx = await walletClient.writeContract({
        address: config.TOKEN.BGT,
        abi: BGTABI,
        functionName: 'redeem',
        args: [receiver as `0x${string}`, parsedAmount],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      return redeemTx;
    } catch (error: any) {
      log.error(`[ERROR] Failed to redeem BGT: ${error.message}`);
      throw new Error(`Failed to redeem BGT: ${error.message}`);
    }
  },
};
