import { WalletClient, Address } from 'viem';
import { ToolConfig } from '../allTools';
import { getRocketLaunchInstance } from './rlInstance';
import { log } from '../../utils/logger';


interface RocketLaunchBuyTokenArgs {
    poolAddress: Address,
    numberBatch: number,
    maxAmountETH: bigint,
    referrer: Address
}
export const rocketLaunchBuyTokenTool: ToolConfig<RocketLaunchBuyTokenArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'rocketlaunch_buy_token',
            description: 'Buy tokens from a specific pool on RocketLaunch',
            parameters: {
                type: 'object',
                properties: {
                    poolAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$', description: 'Pool contract address' },
                    numberBatch: { type: 'number', description: 'Batch number to purchase from' },
                    maxAmountETH: { type: 'string', description: 'Maximum amount of ETH to spend' },
                    referrer: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$', description: 'Referrer address' },
                },
                required: ['poolAddress', 'numberBatch', 'maxAmountETH'],
            },
        },
    },
    handler: async (args, walletClient?: WalletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            const rocketLaunch = getRocketLaunchInstance();
            const result=rocketLaunch.buyToken(args.poolAddress, args.numberBatch, args.maxAmountETH, args.referrer);
            return result;
        } catch (error: any) {
            log.error(`[ERROR] Failed to buy token: ${error.message}`);
            throw new Error(`Failed to buy token: ${error.message}`);
        }
    },
};
