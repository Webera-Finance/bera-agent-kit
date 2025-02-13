import OpenAI from 'openai';
import { Run } from 'openai/resources/beta/threads/runs';
import { Thread } from 'openai/resources/beta/threads';
import { PublicClient, WalletClient } from 'viem';
import { createTools } from '../tools/allTools';
import { log } from '../utils/logger';
import { ConfigChain } from '../constants/chain';

export async function handleRunToolCalls(
  run: Run,
  client: OpenAI,
  thread: Thread,
  config: ConfigChain,
  walletClient: WalletClient,
  publicClient?: PublicClient,
  toolEnvConfigs?: Record<string, unknown>,
): Promise<Run> {
  const toolCalls = run.required_action?.submit_tool_outputs?.tool_calls;
  if (!toolCalls || toolCalls.length === 0) return run;

  const tools = createTools();
  const toolOutputs: OpenAI.Beta.Threads.Runs.RunSubmitToolOutputsParams.ToolOutput[] =
    [];

  const results = await Promise.allSettled(
    toolCalls.map(async tool => {
      const toolConfig = tools[tool.function.name];
      if (!toolConfig) {
        log.error(`Tool ${tool.function.name} not found`);
        return null;
      }

      try {
        const args = JSON.parse(tool.function.arguments);
        const output = await toolConfig.handler(
          args,
          config,
          walletClient,
          publicClient,
          toolEnvConfigs,
        );
        return {
          tool_call_id: tool.id,
          output: String(output),
        };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        return {
          tool_call_id: tool.id,
          output: `Error: ${errorMessage}`,
        };
      }
    }),
  );

  for (const result of results) {
    if (result.status === 'fulfilled' && result.value) {
      toolOutputs.push(result.value);
    } else if (result.status === 'rejected') {
      log.error(`Tool call failed: ${result.reason}`);
    }
  }

  if (toolOutputs.length === 0) {
    log.info(`No valid tool outputs to submit for run ${run.id}`);
    return run;
  }

  return client.beta.threads.runs.submitToolOutputsAndPoll(thread.id, run.id, {
    tool_outputs: toolOutputs,
  });
}
