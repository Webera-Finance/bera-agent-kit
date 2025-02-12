import {
  BeraAgent,
  createViemPublicClient,
  createViemWalletClient,
} from '../src';

async function example() {
  const walletClient = createViemWalletClient();
  const publicClient = createViemPublicClient();
  const agent = new BeraAgent({
    openAIConfig: {
      apiKey: process.env.OPENAI_API_KEY || '',
    },
    walletClient,
    publicClient,
  });

  try {
    // Initialize the agents
    // await agent1.initialize();
    await agent.initialize();

    // const balanceResponse = await agent.sendMessage(
    //   `Check my wallet balance with the wallet address ${agent.getWalletClient().account!.address}`,
    // );
    // log.info(`Balance Check Response (Agent): ${balanceResponse}`);

    const transfer = await agent.sendMessage(
      `check my balance`,
      // `Transfer 100 bera to 0x1234567890123456789012345678901234567890`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap and send all the honey received to address 0x7xxx`
      // `check my bera balance and swap 0.0001 bera to honey at bexswap, swap 0.0001 bera to honey at kodiak, then send all the honey received to address 0x7xxx`,
    );
    console.info(`Transfer Response (Agent): ${transfer}`);

    // // Send a general message about Berachain
    // const response = await agent.sendMessage(
    //   'What can you help me with on Berachain?',
    // );
    // log.info(`Berachain Capabilities Response: ${response}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
}
