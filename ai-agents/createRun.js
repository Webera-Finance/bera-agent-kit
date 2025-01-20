"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRun = createRun;
const logger_1 = require("../utils/logger");
/**
 * The createRun function is used to create and execute a run (a task or operation) for a specific thread in OpenAI’s Beta Threads API.
 * This function assigns an assistant to handle the run and ensures the run is completed by continuously checking its status.
 * @param client
 * @param thread
 * @param assistantId
 * @returns
 */
async function createRun(client, thread, assistantId) {
    logger_1.log.info(`Running for thread ${thread.id} with assistant ${assistantId}`);
    let run = await client.beta.threads.runs.create(thread.id, {
        assistant_id: assistantId,
    });
    // Wait for the run to complete and keep polling
    while (run.status === 'in_progress' || run.status === 'queued') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        run = await client.beta.threads.runs.retrieve(thread.id, run.id);
    }
    return run;
}
//# sourceMappingURL=createRun.js.map