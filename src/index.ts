// Main exports
import 'dotenv/config';
import OpenAI, { ClientOptions } from 'openai';
import { Thread } from 'openai/resources/beta/threads';
import { Assistant } from 'openai/resources/beta/assistants';
import { PublicClient, WalletClient } from 'viem';

// Agent-related imports
import { createAssistant } from './ai-agents/createAssistant';
import { createThread } from './ai-agents/createThread';
import { createRun } from './ai-agents/createRun';
import { performRun } from './ai-agents/performRun';
import { log } from './utils/logger';
import { createViemWalletClient } from './utils/createViemWalletClient';
import { createViemPublicClient } from './utils/createViemPublicClient';
import { ConfigChain, ConfigChainId } from './constants/chain';
import { SupportedChainId } from './utils/enum';

export interface BeraAgentConfig {
  walletClient: WalletClient;
  publicClient?: PublicClient;
  openAIConfig?: ClientOptions;
  toolEnvConfigs?: Record<string, unknown>;
}

export class BeraAgent {
  private openAIClient: OpenAI;
  private assistant: Assistant | null = null;
  private thread: Thread | null = null;
  private walletClient: WalletClient;
  private publicClient: PublicClient;
  private toolEnvConfigs: Record<string, unknown> = {};
  private configChain: ConfigChain;
  constructor(config: BeraAgentConfig) {
    this.openAIClient = new OpenAI(config.openAIConfig);

    // Use provided wallet client or create a default one
    this.walletClient = config.walletClient || createViemWalletClient();
    this.toolEnvConfigs = config.toolEnvConfigs || {};
    const chainID = this.walletClient.chain?.id;
    // config chain depends on the chain id
    if (!chainID) {
      throw new Error('Chain ID is not defined');
    }

    if (!(chainID in ConfigChainId)) {
      throw new Error('Not supported chain');
    }
    // create public client depends on chain id from wallet
    const envType = chainID === SupportedChainId.Mainnet ? true : false;
    this.publicClient = createViemPublicClient(envType);
    this.configChain = ConfigChainId[chainID as keyof typeof ConfigChainId];
  }

  async initialize(): Promise<void> {
    this.assistant = await createAssistant(this.openAIClient, this.configChain);
    this.thread = await createThread(this.openAIClient);
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.assistant || !this.thread) {
      throw new Error('BeraAgent not initialized. Call initialize() first.');
    }
    log.info(
      `Sending message: ${message} for wallet ${this.walletClient.account?.address}`,
    );
    await this.openAIClient.beta.threads.messages.create(this.thread.id, {
      role: 'user',
      content: message,
    });

    const run = await createRun(
      this.openAIClient,
      this.thread,
      this.assistant.id,
    );

    const result = await performRun(
      run,
      this.openAIClient,
      this.thread,
      this.configChain,
      this.walletClient,
      this.publicClient,
      this.toolEnvConfigs,
    );

    if (result?.type === 'text') {
      return result.text.value;
    }

    throw new Error('Unexpected response format');
  }

  getAssistant(): Assistant | null {
    return this.assistant;
  }

  getThread(): Thread | null {
    return this.thread;
  }

  getWalletClient(): WalletClient {
    return this.walletClient;
  }
}

// Utility exports
export { createViemWalletClient } from './utils/createViemWalletClient';
export { createViemPublicClient } from './utils/createViemPublicClient';
export { log } from './utils/logger';

// Tool exports
export { createTools } from './tools/allTools';

// Agent-related exports
export { createAssistant } from './ai-agents/createAssistant';
export { createThread } from './ai-agents/createThread';
export { createRun } from './ai-agents/createRun';
export { performRun } from './ai-agents/performRun';

// Constants and types
export * from './constants';
export * from './tools/allTools';
