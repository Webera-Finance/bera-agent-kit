import { BeraAgent, createViemWalletClient } from '../src';

async function example() {
  const walletClient = createViemWalletClient();
  const agent1 = new BeraAgent({
    openAIConfig: {
      apiKey: process.env.OPENAI_API_KEY || '',
    },
    walletClient,
  });

  const agent2 = new BeraAgent({
    openAIConfig: {
      apiKey: process.env.OPENAI_API_KEY || '',
    },
    walletClient,
  });

  try {
    // Using agent 1 thread to initialize agent 2. So that we can check if the agent 2 can using user histories or not
    // await agent1.initialize("");
    // const thread = agent1.getThread()?.id || "";
    // const response1 = await agent1.sendMessage("Hi, I'm WeBERA!");
    // console.log(response1);
    await agent2.initialize("thread_h7uAdNTCFpkZMELQ9efNtgcR");
    // const response2 = await agent2.sendMessage("Who am I?");
    // console.log(response2);

    const messages = await agent2.getMessage()
    console.log(messages)
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
}
