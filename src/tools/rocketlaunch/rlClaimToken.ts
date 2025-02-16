import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';
import { rocketLaunchABI } from '../../constants/rocketLaunchABI';
import { ConfigChain } from '../../constants/chain';

interface ClaimTokenArgs {
  address: Address;
}

export const rocketLaunchClaimTokenTool: ToolConfig<ClaimTokenArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'rocketlaunch_claim_token',
      description: 'Claim tokens from a specific address',
      parameters: {
        type: 'object',
        properties: {
          address: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'The address to claim tokens from.',
          },
        },
        required: [],
      },
    },
  },
  handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      log.info('[INFO] Claiming tokens...', {});

      const claimTx = await walletClient.writeContract({
        address: config.CONTRACT.RocketLaunch,
        abi: rocketLaunchABI,
        functionName: 'claimToken',
        args: [args.address],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      log.info(`[INFO] Claim transaction successful. Transaction Hash: ${claimTx}`);
      return claimTx;
    } catch (error: any) {
      log.error(`[ERROR] Failed to claim tokens: ${error.message}`);
      throw new Error(`Failed to claim tokens: ${error.message}`);
    }
  },
};
