import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { getRocketLaunchInstance } from './rlInstance';
import { log } from '../../utils/logger';
import { LaunchPoolInputData } from '@defikit/rocketlaunch_sdk';



export const rocketLaunchLaunchPoolTool: ToolConfig<LaunchPoolInputData> = {
  definition: {
    type: 'function',
    function: {
      name: 'rocketlaunch_launch_pool',
      description: 'Launch a new pool on RocketLaunch',
      parameters: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Name of the pool' },
          symbol: { type: 'string', description: 'Token symbol' },
          decimals: { type: 'number', description: 'Token decimals' },
          totalSupply: { type: 'string', description: 'Total token supply' },
          fixedCapETH: { type: 'string', description: 'Fixed cap in ETH' },
          tokenForAirdrop: { type: 'string', description: 'Tokens for airdrop' },
          tokenForFarm: { type: 'string', description: 'Tokens for farming' },
          tokenForSale: { type: 'string', description: 'Tokens for sale' },
          tokenForAddLP: { type: 'string', description: 'Tokens for liquidity' },
          tokenPerPurchase: { type: 'string', description: 'Tokens per purchase' },
          maxRepeatPurchase: { type: 'string', description: 'Max repeat purchase' },
          startTime: { type: 'number', description: 'Start time of the pool' },
          minDurationSell: { type: 'number', description: 'Minimum duration for sale' },
          maxDurationSell: { type: 'number', description: 'Maximum duration for sale' },
          metadata: { type: 'string', description: 'Metadata URI' },
          numberBatch: { type: 'number', description: 'Number of batches' },
          maxAmountETH: { type: 'number', description: 'Max amount of ETH per user' },
          referrer: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$', description: 'Referrer address' },
        },
        required: ['name', 'symbol', 'decimals', 'totalSupply', 'fixedCapETH', 'startTime'],
      },
    },
  },
  handler: async (args, walletClient?: WalletClient) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }
      const rocketLaunch = getRocketLaunchInstance()
      const launchTx = await rocketLaunch.launchPool(args);
      return launchTx;
    } catch (error: any) {
      log.error(`[ERROR] Failed to launch pool: ${error.message}`);
      throw new Error(`Failed to launch pool: ${error.message}`);
    }
  },
};
