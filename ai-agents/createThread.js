"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThread = createThread;
/**
 * This function is particularly useful in applications that need to initiate conversations with OpenAI
 * @param client - OpenAI client
 * @param message - Optional message to send to the thread
 * @returns - The created thread
 */
async function createThread(client, message) {
    const thread = await client.beta.threads.create();
    if (message) {
        await client.beta.threads.messages.create(thread.id, {
            role: 'user',
            content: message,
        });
    }
    return thread;
}
//# sourceMappingURL=createThread.js.map