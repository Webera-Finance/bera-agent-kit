"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRunToolCalls = handleRunToolCalls;
const allTools_1 = require("../tools/allTools");
const logger_1 = require("../utils/logger");
async function handleRunToolCalls(run, client, thread, walletClient) {
    const toolCalls = run.required_action?.submit_tool_outputs?.tool_calls;
    if (!toolCalls || toolCalls.length === 0)
        return run;
    const tools = (0, allTools_1.createTools)(walletClient);
    const toolOutputs = [];
    const results = await Promise.allSettled(toolCalls.map(async (tool) => {
        const toolConfig = tools[tool.function.name];
        if (!toolConfig) {
            logger_1.log.error(`Tool ${tool.function.name} not found`);
            return null;
        }
        try {
            const args = JSON.parse(tool.function.arguments);
            const output = await toolConfig.handler(args, walletClient);
            return {
                tool_call_id: tool.id,
                output: String(output),
            };
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return {
                tool_call_id: tool.id,
                output: `Error: ${errorMessage}`,
            };
        }
    }));
    for (const result of results) {
        if (result.status === 'fulfilled' && result.value) {
            toolOutputs.push(result.value);
        }
        else if (result.status === 'rejected') {
            logger_1.log.error(`Tool call failed: ${result.reason}`);
        }
    }
    if (toolOutputs.length === 0) {
        logger_1.log.info(`No valid tool outputs to submit for run ${run.id}`);
        return run;
    }
    return client.beta.threads.runs.submitToolOutputsAndPoll(thread.id, run.id, {
        tool_outputs: toolOutputs,
    });
}
//# sourceMappingURL=handleRunToolCalls.js.map