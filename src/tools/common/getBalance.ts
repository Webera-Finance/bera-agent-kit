import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { formatEther } from 'viem';
import { createViemPublicClient } from '../../utils/createViemPublicClient';

interface GetBalanceArgs {
  wallet: Address;
}

export const getBalanceTool: ToolConfig<GetBalanceArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'get_balance',
      description: 'Get the balance of a wallet',
      parameters: {
        type: 'object',
        properties: {
          wallet: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description:
              'The wallet address to get the balance of. Default is current wallet provider',
          },
        },
        required: [],
      },
    },
  },
  handler: async (args, walletClient?: WalletClient) => {
    const publicClient = createViemPublicClient();

    const address = args.wallet || walletClient?.account?.address;

    console.log('Getting balance for wallet', address);
    const balance = await publicClient.getBalance({ address });
    return formatEther(balance);
  },
};
