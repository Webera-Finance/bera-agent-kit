import { TavilySearchResults } from '@langchain/community/tools/tavily_search';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ToolConfig } from '../allTools';
import { gpt4o } from '../../utils/model';
import { log } from '../../utils/logger';
import { ConfigChain } from 'bera-agent-kit/constants/chain';

// Initialize tools array and only add Tavily search if API key is available
const searchTools = [];
if (process.env.TAVILY_API_KEY) {
  // Only pass supported options (just the apiKey in this case)
  searchTools.push(new TavilySearchResults({
    apiKey: process.env.TAVILY_API_KEY
  }));
}

const generalAgent = createReactAgent({
  llm: gpt4o,
  tools: searchTools,
});

export const liveSearchTool: ToolConfig<{ 
  query: string; 
  searchDepth?: string; 
  topic?: string; 
  timeRange?: string; 
  includeAnswer?: string; 
}> = {
  definition: {
    type: 'function',
    function: {
      name: 'liveSearch',
      description: 'Searches live data using Tavily with configurable parameters',
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string' },
          searchDepth: { type: 'string', enum: ['basic', 'advanced'], default: 'advanced' },
          topic: { type: 'string', default: 'finance' },
          timeRange: { type: 'string', default: 'week' },
          includeAnswer: { type: 'string', enum: ['none', 'basic', 'detailed'], default: 'basic' },
        },
        required: ['query'],
      },
    },
  },
  handler: async (
    args: { 
      query: string; 
      searchDepth?: string; 
      topic?: string; 
      timeRange?: string; 
      includeAnswer?: string; 
    }, 
    _config: ConfigChain
  ) => {
    const { 
      query, 
      searchDepth = 'advanced', 
      topic = 'general', 
      timeRange = 'week', 
      includeAnswer = 'advanced' 
    } = args;
    try {
      // Build a prompt that includes the query and the additional search parameters
      const searchPrompt = `${query}
        Parameters: searchDepth=${searchDepth},
        topic=${topic},
        timeRange=${timeRange},
        includeAnswer=${includeAnswer}`;
      
      const results = await generalAgent.invoke({
        messages: [{ role: 'user', content: searchPrompt }],
      });

      // Extract the relevant information from the agent's response
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
        (msg: SearchResultMessage) => msg.name === 'tavily_search_results_json'
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