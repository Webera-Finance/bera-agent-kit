import { WalletClient, Address } from 'viem';
import { ToolConfig } from '../allTools';
import { getRocketLaunchInstance } from './rlInstance';
import { log } from '../../utils/logger';

interface RocketLaunchClaimTokenArgs {
    address: Address;
}

export const rocketLaunchClaimTokenTool: ToolConfig<RocketLaunchClaimTokenArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'rocketlaunch_claim_token',
            description: 'Claim tokens from RocketLaunch',
            parameters: {
                type: 'object',
                properties: {
                    address: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$', description: 'Pool address on RocketLaunch' },
                },
                required: ['address'],
            },
        },
    },
    handler: async (args, walletClient?: WalletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }

            const rocketLaunch = getRocketLaunchInstance();
            const result = await rocketLaunch.claimToken(args.address);
            return result;
        } catch (error: any) {
            log.error(`[ERROR] Failed to claim token: ${error.message}`);
            throw new Error(`Failed to claim token: ${error.message}`);
        }
    },
};
