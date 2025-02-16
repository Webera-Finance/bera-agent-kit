import { Address, WalletClient, formatUnits, parseUnits, parseEther } from 'viem';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';
import { CONTRACT } from '../../constants/index';
import { rocketLaunchABI } from '../../constants/rocketLaunchABI'
import { ADDRESS_NULL } from './constance';
import { createViemPublicClient } from '../../utils/createViemPublicClient';
import { ConfigChain } from '../../constants/chain';

interface BuyTokenArgs {
    poolAddress: Address;
    numberBatch: number;
    referrer?: Address;
}

export const rocketLaunchBuyTokenTool: ToolConfig<BuyTokenArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'rocketlaunch_buy_token',
            description: 'Buy tokens from a launch pool on RocketLaunch',
            parameters: {
                type: 'object',
                properties: {
                    poolAddress: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The address of the token launch pool.',
                    },
                    numberBatch: {
                        type: 'integer',
                        minimum: 1,
                        description: 'The number of batches to purchase.',
                    },
                    referrer: {
                        type: ['string', 'null'],
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Optional referrer address.',
                    },
                },
                required: ['poolAddress', 'numberBatch'],
            },
        },
    },
    handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            const publicClient = createViemPublicClient();
            const estimatedCost = await publicClient.readContract({
                address: CONTRACT.RocketLaunch,
                abi: rocketLaunchABI,
                functionName: 'estimateBuy',
                args: [args.poolAddress, args.numberBatch],
            });

            const maxAmountETH = estimatedCost as bigint
            log.info('[INFO] Buying tokens from RocketLaunch...', {});
            const buyTx = await walletClient.writeContract({
                address: config.CONTRACT.RocketLaunch,
                abi: rocketLaunchABI,
                functionName: 'buy',
                args: [args.poolAddress, args.numberBatch, maxAmountETH, args.referrer || ADDRESS_NULL],
                chain: walletClient.chain,
                account: walletClient.account,
                value: maxAmountETH,
            });

            log.info(`[INFO] Buy transaction successful. Transaction Hash: ${buyTx}`);
            return buyTx;
        } catch (error: any) {
            log.error(`[ERROR] Failed to buy tokens: ${error.message}`);
            throw new Error(`Failed to buy tokens: ${error.message}`);
        }
    },
};
