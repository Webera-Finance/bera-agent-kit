"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveSearchTool = void 0;
const tavily_search_1 = require("@langchain/community/tools/tavily_search");
const prebuilt_1 = require("@langchain/langgraph/prebuilt");
const model_1 = require("../../utils/model");
const logger_1 = require("../../utils/logger");
// Initialize tools array
const searchTools = [];
// Only add Tavily search if API key is available
if (process.env.TAVILY_API_KEY) {
    searchTools.push(new tavily_search_1.TavilySearchResults());
}
const generalAgent = (0, prebuilt_1.createReactAgent)({
    llm: model_1.gpt4o,
    tools: searchTools,
});
exports.liveSearchTool = {
    definition: {
        type: 'function',
        function: {
            name: 'liveSearch',
            description: 'Searches live data',
            parameters: {
                type: 'object',
                properties: {
                    query: { type: 'string' },
                },
                required: ['query'],
            },
        },
    },
    handler: async (args) => {
        const { query } = args;
        try {
            //   console.log("Sending request to Tavily API with query:", query);
            const results = await generalAgent.invoke({
                messages: [{ role: 'user', content: query }],
            });
            const toolMessage = results?.messages?.find((msg) => msg.name === 'tavily_search_results_json');
            const responseContent = toolMessage?.content || 'No relevant information found.';
            return responseContent;
        }
        catch (error) {
            logger_1.log.error('Error fetching search results:', error);
            throw error;
        }
    },
};
//# sourceMappingURL=liveSearch.js.map