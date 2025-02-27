import { Address, PublicClient, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { formatEther } from 'viem';
import { createViemPublicClient } from '../../utils/createViemPublicClient';
import { log } from '../../utils/logger';
import { SupportedChainId } from '../../utils/enum';
import { ConfigChain } from 'bera-agent-kit/constants/chain';

interface GetBalanceArgs {
  wallet: Address;
}

export const getBalanceTool: ToolConfig<GetBalanceArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'get_balance',
      description:
        'Get the native token balance of embedded wallet. If wallet is not provided, it will use the current wallet provider',
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
  handler: async (
    args,
    _config: ConfigChain,
    walletClient?: WalletClient,
    publicClient?: PublicClient,
  ) => {
    const address = args.wallet || walletClient?.account?.address;
    const envType =
      walletClient?.chain?.id === SupportedChainId.Mainnet ? true : false;
    const newPublicClient = publicClient || createViemPublicClient(envType);
    log.info(`[INFO] Getting balance for ${address}`);
    const balance = await newPublicClient.getBalance({ address });
    return formatEther(balance);
  },
};
