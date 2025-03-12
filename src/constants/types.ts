import { ClientOptions } from 'openai';
import { PublicClient, WalletClient } from 'viem';

export enum EnvConfig {
  OOGA_BOOGA_API_KEY = 'OOGA_BOOGA_API_KEY',
  TAVILY_SEARCH_API_KEY = 'TAVILY_SEARCH_API_KEY',
}

export interface ToolEnvConfigs {
  [EnvConfig.OOGA_BOOGA_API_KEY]?: string;
  [EnvConfig.TAVILY_SEARCH_API_KEY]?: string;
}

export interface BeraAgentConfig {
  walletClient: WalletClient;
  publicClient?: PublicClient;
  openAIConfig?: ClientOptions;
  toolEnvConfigs?: ToolEnvConfigs;
}

export type LPTokenPair =
  | 'WBERA_HONEY'
  | 'WBTC_WBERA'
  | 'WETH_WBERA'
  | 'BYUSD_HONEY'
  | 'USDCE_HONEY';