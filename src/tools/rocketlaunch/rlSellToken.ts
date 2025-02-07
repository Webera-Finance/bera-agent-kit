import { WalletClient, Address } from 'viem';
import { ToolConfig } from '../allTools';
import { getRocketLaunchInstance } from './rlInstance';
import { log } from '../../utils/logger';

interface RocketLaunchSellTokenArgs {
    poolAddress: Address;
    amount: bigint;
}

export const rocketLaunchSellTokenTool: ToolConfig<RocketLaunchSellTokenArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'rocketlaunch_sell_token',
            description: 'Sell tokens from a specific pool on RocketLaunch',
            parameters: {
                type: 'object',
                properties: {
                    poolAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$', description: 'Pool contract address' },
                    amount: { type: 'string', description: 'Amount of tokens to sell' },
                },
                required: ['poolAddress', 'amount'],
            },
        },
    },
    handler: async (args, walletClient?: WalletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }

            const rocketLaunch = getRocketLaunchInstance();
            const result = await rocketLaunch.sellToken(args.poolAddress, args.amount);
            return result;
        } catch (error: any) {
            log.error(`[ERROR] Failed to sell token: ${error.message}`);
            throw new Error(`Failed to sell token: ${error.message}`);
        }
    },
};
