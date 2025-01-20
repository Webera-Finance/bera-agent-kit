import 'dotenv/config';
import { ClientOptions } from 'openai';
import { Thread } from 'openai/resources/beta/threads';
import { Assistant } from 'openai/resources/beta/assistants';
import { WalletClient } from 'viem';
export interface BeraAgentConfig {
    walletClient: WalletClient;
    openAIConfig?: ClientOptions;
}
export declare class BeraAgent {
    private openAIClient;
    private assistant;
    private thread;
    private walletClient;
    constructor(config: BeraAgentConfig);
    initialize(): Promise<void>;
    sendMessage(message: string): Promise<string>;
    getAssistant(): Assistant | null;
    getThread(): Thread | null;
    getWalletClient(): WalletClient;
}
export { createViemWalletClient } from './utils/createViemWalletClient';
export { createViemPublicClient } from './utils/createViemPublicClient';
export { log } from './utils/logger';
export { createTools } from './tools/allTools';
export { createAssistant } from './ai-agents/createAssistant';
export { createThread } from './ai-agents/createThread';
export { createRun } from './ai-agents/createRun';
export { performRun } from './ai-agents/performRun';
export * from './constants';
export * from './tools/allTools';
//# sourceMappingURL=index.d.ts.map