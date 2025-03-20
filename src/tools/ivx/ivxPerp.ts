import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { fetchTokenDecimals } from '../../utils/helpers';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';

interface IvxPerpArgs {
  leverage: number;
  direction: 'long' | 'short';
  pair: string;
  positionSize: number;
}

export const ivxPerpTool: ToolConfig<IvxPerpArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'ivx_perp',
      description: 'Perform a ivx perp',
      parameters: {
        type: 'object',
        properties: {
          leverage: {
            type: 'number',
            description: 'The leverage for the perp',
          },
          direction: {
            type: 'string',
            description: 'The direction of the perp',
            enum: ['long', 'short'],
          },
          pair: {
            type: 'string',
            description: 'The pair of the perp',
          },
          positionSize: {
            type: 'number',
            description: 'The position size for the perp',
          },
        },
        required: ['leverage', 'direction', 'pair', 'positionSize'],
      },
    },
  },
  handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
    try {
      const deadline = Math.floor(Date.now() / 1000) + 1200;

      let tx;
      log.info(`[INFO] Ivx perp successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      log.error(`[ERROR] Kodiak swap failed: ${error.message}`);
      throw new Error(`Swap failed: ${error.message}`);
    }
  },
};
