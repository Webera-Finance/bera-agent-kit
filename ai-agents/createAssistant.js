"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssistant = createAssistant;
const allTools_1 = require("../tools/allTools");
const promts_1 = require("../constants/promts");
/**
 * This function creates an assistant using OpenAI's Beta Assistants API
 * @param client - OpenAI client
 * @param walletClient - Viem wallet client for blockchain interactions
 * @returns - The created assistant
 */
async function createAssistant(client, walletClient) {
    const tools = (0, allTools_1.createTools)(walletClient);
    return await client.beta.assistants.create({
        model: 'gpt-4o-mini',
        temperature: 0.3,
        name: 'My Assistant',
        instructions: promts_1.promts,
        tools: Object.values(tools).map(tool => tool.definition),
    });
}
//# sourceMappingURL=createAssistant.js.map