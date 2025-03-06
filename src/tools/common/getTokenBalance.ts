import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import {
  fetchTokenDecimalsAndFormatAmount,
  getTokenBalance,
} from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';

interface GetTokenBalanceArgs {
  wallet: Address;
  tokenName: string;
}

export const getTokenBalanceTool: ToolConfig<GetTokenBalanceArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'get_token_balance',
      description: 'Get the ERC20 token balance of a wallet',
      parameters: {
        type: 'object',
        properties: {
          wallet: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description:
              'The wallet address to get the balance of. If wallet is not provided, it will use the current wallet provider',
          },
          tokenName: {
            type: 'string',
            description: 'The name of the token to get the balance',
          },
        },
        required: ['tokenName'],
      },
    },
  },
  handler: async (
    args: GetTokenBalanceArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      const { wallet, tokenName } = args;
      const address = wallet || walletClient?.account?.address;

      if (!tokenName) {
        throw new Error('Token name is required');
      }

      log.info(`[INFO] Getting balance for ${address} with token ${tokenName}`);

      // find the token address from the token name
      const foundTokenName = Object.keys(config.TOKEN).find(
        key => key.toLowerCase() === tokenName.toLowerCase(),
      );

      if (!foundTokenName) {
        throw new Error(`Token ${tokenName} not found`);
      }

      const tokenAddress = config.TOKEN[foundTokenName];

      if (!tokenAddress) {
        throw new Error(`Token ${foundTokenName} address not found`);
      }

      const rawTokenBalanceOfWallet = await getTokenBalance(
        walletClient as WalletClient,
        tokenAddress,
      );

      const formattedTokenBalanceOfWallet =
        await fetchTokenDecimalsAndFormatAmount(
          walletClient as WalletClient,
          tokenAddress,
          rawTokenBalanceOfWallet,
        );

      return formattedTokenBalanceOfWallet;
    } catch (error) {
      console.error(`[ERROR] Get Token Balance failed: ${error}`);
      throw new Error(`Get Token Balance  failed: ${error}`);
    }
  },
};
