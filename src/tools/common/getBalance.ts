import { Address, createPublicClient, PublicClient, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { formatEther } from 'viem';
import { createViemPublicClient } from '../../utils/createViemPublicClient';
import { log } from '../../utils/logger';
import { ChainId, EnumTypeEnv } from '../../utils/enum';

interface GetBalanceArgs {
  wallet: Address;
}

export const getBalanceTool: ToolConfig<GetBalanceArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'get_balance',
      description:
        'Get the balance of a wallet. If wallet is not provided, it will use the current wallet provider',
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
    walletClient?: WalletClient,
    publicClient?: PublicClient,
  ) => {
    const address = args.wallet || walletClient?.account?.address;
    const envType =
      walletClient?.chain?.id === ChainId.Mainnet
        ? EnumTypeEnv.Mainnet
        : EnumTypeEnv.Testnet;
    const newPublicClient = publicClient || createViemPublicClient(envType);
    log.info(`[INFO] Getting balance for ${address}`);
    const balance = await newPublicClient.getBalance({ address });
    return formatEther(balance);
  },
};
