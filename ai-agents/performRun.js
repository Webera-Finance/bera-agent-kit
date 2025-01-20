"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performRun = performRun;
const handleRunToolCalls_1 = require("./handleRunToolCalls");
async function performRun(run, client, thread, walletClient) {
    let currentRun = run;
    while (currentRun.status === 'requires_action' &&
        currentRun.required_action?.type === 'submit_tool_outputs') {
        currentRun = await (0, handleRunToolCalls_1.handleRunToolCalls)(run, client, thread, walletClient);
    }
    if (currentRun.status === 'completed') {
        const messages = await client.beta.threads.messages.list(thread.id);
        const lastMessage = messages.data[0];
        if (lastMessage.role === 'assistant' &&
            lastMessage.content[0].type === 'text') {
            return lastMessage.content[0];
        }
    }
    return null;
}
//# sourceMappingURL=performRun.js.map