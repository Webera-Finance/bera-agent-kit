import OpenAI from 'openai';
import { Assistant } from 'openai/resources/beta/assistants';
import { createTools } from '../tools/allTools';
import { promtInstructions } from '../constants/promts';
import { ConfigChain } from '../constants/chain';

/**
 * This function creates an assistant using OpenAI's Beta Assistants API
 * @param client - OpenAI client
 * @param walletClient - Viem wallet client for blockchain interactions
 * @returns - The created assistant
 */
export async function createAssistant(
  client: OpenAI,
  config: ConfigChain,
): Promise<Assistant> {
  const tools = createTools();

  return await client.beta.assistants.create({
    model: 'gpt-4o-mini',
    temperature: 0.3,
    name: 'My Assistant',
    instructions: promtInstructions(config),
    tools: Object.values(tools).map(tool => tool.definition),
  });
}
