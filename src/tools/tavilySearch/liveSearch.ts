import { TavilySearchResults } from '@langchain/community/tools/tavily_search';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ToolConfig } from '../allTools';
import { gpt4o } from '../../utils/model';
import { log } from '../../utils/logger';
import { ConfigChain } from '../../constants/chain';
import { PublicClient, WalletClient } from 'viem';
import { EnvConfig, ToolEnvConfigs } from '../../constants/types';

// Initialize tools array and only add Tavily search if API key is available

export const liveSearchTool: ToolConfig<{
  query: string;
  searchDepth: 'basic' | 'advanced';
  topic: 'general' | 'news' | 'finacial';
  timeRange: 'day' | 'week' | 'month' | 'year';
  includeAnswer: 'basic' | 'advanced';
}> = {
  definition: {
    type: 'function',
    function: {
      name: 'liveSearch',
      description:
        'Searches live data using Tavily with configurable parameters',
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string' },
          searchDepth: {
            type: 'string',
            enum: ['basic', 'advanced'],
            default: 'advanced',
          },
          topic: {
            type: 'string',
            enum: ['general', 'news', 'finacial'],
            default: 'general',
          },
          timeRange: {
            type: 'string',
            enum: ['day', 'week', 'month', 'year'],
            default: 'week',
          },
          includeAnswer: {
            type: 'string',
            enum: ['basic', 'advanced'],
            default: 'advanced',
          },
        },
        required: ['query'],
      },
    },
  },
  handler: async (
    args: {
      query: string;
      searchDepth: 'basic' | 'advanced';
      topic: 'general' | 'news' | 'finacial';
      timeRange: 'day' | 'week' | 'month' | 'year';
      includeAnswer: 'basic' | 'advanced';
    },
    config: ConfigChain,
    walletClient: WalletClient,
    publicClient: PublicClient,
    toolEnvConfigs?: ToolEnvConfigs,
  ) => {
    const {
      query,
      searchDepth = 'advanced',
      topic = 'general',
      timeRange = 'week',
      includeAnswer = 'advanced',
    } = args;
    try {
      if (!toolEnvConfigs?.[EnvConfig.TAVILY_SEARCH_API_KEY]) {
        throw new Error('TAVILY_SEARCH_API_KEY is not defined.');
      }

      // Build a prompt that includes the query and the additional search parameters
      const searchPrompt = `${query}
        Parameters: searchDepth=${searchDepth},
        topic=${topic},
        timeRange=${timeRange},
        includeAnswer=${includeAnswer}`;

      const searchTools = [];
      // Only pass supported options (just the apiKey in this case)
      searchTools.push(
        new TavilySearchResults({
          apiKey: toolEnvConfigs?.[EnvConfig.TAVILY_SEARCH_API_KEY],
        }),
      );

      const generalAgent = createReactAgent({
        llm: gpt4o,
        tools: searchTools,
      });

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
