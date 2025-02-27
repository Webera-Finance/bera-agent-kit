import { ToolConfig } from '../allTools';
import { BGTABI } from '../../constants/abis/bgtABI';
import { fetchTokenDecimalsAndParseAmount } from '../../utils/helpers';
import { log } from '../../utils/logger';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';

interface BGTStationRedeemArgs {
  receiver?: string; // Address of the receiver for redemption (optional)
  amount: number; // Amount of BGT to redeem (as a number)
}

export const bgtStationRedeemTool: ToolConfig<BGTStationRedeemArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'bgt_station_redeem',
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

      const receiver = args.receiver || walletClient.account.address;

      log.info('[INFO] Parsing amount based on token decimals...');
      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        config.TOKEN.BGT,
        args.amount,
      );

      log.info(`[INFO] Redeeming BGT to receiver: ${receiver}...`);
      const redeemTx = await walletClient.writeContract({
        address: config.TOKEN.BGT,
        abi: BGTABI,
        functionName: 'redeem',
        args: [receiver as `0x${string}`, parsedAmount],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      // log.info('[INFO] Waiting for transaction receipt...');
      // const receipt = await walletClient.waitForTransactionReceipt({
      //   hash: redeemTx as `0x${string}`,
      // });

      // if (receipt.status !== 'success') {
      //   throw new Error('Redemption transaction failed.');
      // }

      log.info(`[INFO] Redemption successful. Transaction Hash: ${redeemTx}`);
      return redeemTx;
    } catch (error: any) {
      log.error(`[ERROR] Failed to redeem BGT: ${error.message}`);
      throw new Error(`Failed to redeem BGT: ${error.message}`);
    }
  },
};
