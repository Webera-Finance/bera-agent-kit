import { TavilySearchResults } from '@langchain/community/tools/tavily_search';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ToolConfig } from '../allTools';
import { gpt4o } from '../../utils/model';
import { log } from '../../utils/logger';
import { ConfigChain } from 'bera-agent-kit/constants/chain';

// Initialize tools array
const searchTools = [];

// Only add Tavily search if API key is available
if (process.env.TAVILY_API_KEY) {
  searchTools.push(new TavilySearchResults());
}

const generalAgent = createReactAgent({
  llm: gpt4o,
  tools: searchTools,
});

export const liveSearchTool: ToolConfig<{ query: string }> = {
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
  handler: async (args: { query: string }, _config: ConfigChain) => {
    const { query } = args;
    try {
      const results = await generalAgent.invoke({
        messages: [{ role: 'user', content: query }],
      });

      // Extract the relevant information from the results
      interface SearchResultMessage {
        name: string;
        content: string;
      }

      interface GeneralAgentResult {
        messages: SearchResultMessage[];
      }

      const toolMessage: SearchResultMessage | undefined = (
        results as GeneralAgentResult
      )?.messages?.find(
        (msg: SearchResultMessage) => msg.name === 'tavily_search_results_json',
      );
      const responseContent =
        toolMessage?.content || 'No relevant information found.';

      return responseContent;
    } catch (error) {
      log.error('Error fetching search results:', error);
      throw error;
    }
  },
};
