import OpenAI from 'openai';
import { Run } from 'openai/resources/beta/threads/runs';
import { Thread } from 'openai/resources/beta/threads';
/**
 * The createRun function is used to create and execute a run (a task or operation) for a specific thread in OpenAI’s Beta Threads API.
 * This function assigns an assistant to handle the run and ensures the run is completed by continuously checking its status.
 * @param client
 * @param thread
 * @param assistantId
 * @returns
 */
export declare function createRun(client: OpenAI, thread: Thread, assistantId: string): Promise<Run>;
//# sourceMappingURL=createRun.d.ts.map