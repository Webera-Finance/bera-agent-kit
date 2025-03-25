import axios from 'axios';
import { PublicClient, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';
import { EnvConfig, ToolEnvConfigs } from '../../constants/types';

interface OogaBoogaToken {
  address: string;
  chainId: number;
  decimals: number;
  name: string;
  symbol: string;
  logoURI?: string;
}

// Main tool handler
export const oogaBoogaTokensTool: ToolConfig<any> = {
  definition: {
    type: 'function',
    function: {
      name: 'ooga_booga_tokens',
      description: 'Get all supported tokens from OogaBooga',
      parameters: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
  },
  handler: async (
    args,
    config: ConfigChain,
    walletClient: WalletClient,
    publicClient: PublicClient,
    toolEnvConfigs?: ToolEnvConfigs,
  ): Promise<OogaBoogaToken[]> => {
    if (!toolEnvConfigs?.[EnvConfig.OOGA_BOOGA_API_KEY]) {
      throw new Error('OOGA_BOOGA_API_KEY is required.');
    }

    if (!walletClient || !walletClient.account) {
      throw new Error('Wallet client is not provided');
    }

    const headers = {
      Authorization: `Bearer ${toolEnvConfigs[EnvConfig.OOGA_BOOGA_API_KEY]}`,
    };

    try {
      log.info('[INFO] Fetching supported tokens from OogaBooga API');
      const response = await axios.get(`${config.URL.OogaBoogaURL}/v1/tokens`, {
        headers,
      });

      log.debug('[DEBUG] OogaBooga tokens response:', response.data);
      return response.data;
    } catch (error: any) {
      log.error(`[ERROR] Failed to fetch OogaBooga tokens: ${error.message}`);
      throw new Error(`Failed to fetch OogaBooga tokens: ${error.message}`);
    }
  },
};
