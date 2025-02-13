import OpenAI from 'openai';
import { Run } from 'openai/resources/beta/threads/runs';
import { Thread } from 'openai/resources/beta/threads';
import { PublicClient, WalletClient } from 'viem';
import { handleRunToolCalls } from './handleRunToolCalls';
import { ConfigChain } from '../constants/chain';

export async function performRun(
  run: Run,
  client: OpenAI,
  thread: Thread,
  config: ConfigChain,
  walletClient: WalletClient,
  publicClient?: PublicClient,
  toolEnvConfigs?: Record<string, unknown>,
): Promise<{ type: string; text: { value: string } } | null> {
  let currentRun = run;

  while (
    currentRun.status === 'requires_action' &&
    currentRun.required_action?.type === 'submit_tool_outputs'
  ) {
    currentRun = await handleRunToolCalls(
      currentRun,
      client,
      thread,
      config,
      walletClient,
      publicClient,
      toolEnvConfigs,
    );
  }

  if (currentRun.status === 'completed') {
    const messages = await client.beta.threads.messages.list(thread.id);
    const lastMessage = messages.data[0];
    if (
      lastMessage.role === 'assistant' &&
      lastMessage.content[0].type === 'text'
    ) {
      return lastMessage.content[0];
    }
  }

  return null;
}
