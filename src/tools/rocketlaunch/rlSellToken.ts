import { Address, WalletClient, parseUnits } from 'viem';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';
import { rocketLaunchABI } from '../../constants/rocketLaunchABI';
import { ConfigChain } from '../../constants/chain';

interface SellTokenArgs {
    poolAddress: Address;
    amount: bigint;
}

export const rocketLaunchSellTokenTool: ToolConfig<SellTokenArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'rocketlaunch_sell_token',
            description: 'Sell tokens from a launch pool on RocketLaunch',
            parameters: {
                type: 'object',
                properties: {
                    poolAddress: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The address of the token launch pool.',
                    },
                    amount: {
                        type: 'string',
                        pattern: '^[0-9]+$',
                        description: 'The number of batches to sell.',
                    },
                },
                required: ['poolAddress', 'amount'],
            },
        },
    },
    handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            log.info('[INFO] Selling tokens on RocketLaunch...', {});
            const sellTx = await walletClient.writeContract({
                address: config.CONTRACT.RocketLaunch,
                abi: rocketLaunchABI,
                functionName: 'sell',
                args: [args.poolAddress, args.amount],
                chain: walletClient.chain,
                account: walletClient.account,
            });

            log.info(`[INFO] Sell transaction successful. Transaction Hash: ${sellTx}`);
            return sellTx;
        } catch (error: any) {
            log.error(`[ERROR] Failed to sell tokens: ${error.message}`);
            throw new Error(`Failed to sell tokens: ${error.message}`);
        }
    },
};
