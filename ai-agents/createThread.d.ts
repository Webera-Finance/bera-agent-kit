import OpenAI from 'openai';
import { Thread } from 'openai/resources/beta/threads';
/**
 * This function is particularly useful in applications that need to initiate conversations with OpenAI
 * @param client - OpenAI client
 * @param message - Optional message to send to the thread
 * @returns - The created thread
 */
export declare function createThread(client: OpenAI, message?: string): Promise<Thread>;
//# sourceMappingURL=createThread.d.ts.map