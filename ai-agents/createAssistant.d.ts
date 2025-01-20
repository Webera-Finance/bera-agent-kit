import OpenAI from 'openai';
import { Assistant } from 'openai/resources/beta/assistants';
import { WalletClient } from 'viem';
/**
 * This function creates an assistant using OpenAI's Beta Assistants API
 * @param client - OpenAI client
 * @param walletClient - Viem wallet client for blockchain interactions
 * @returns - The created assistant
 */
export declare function createAssistant(client: OpenAI, walletClient: WalletClient): Promise<Assistant>;
//# sourceMappingURL=createAssistant.d.ts.map