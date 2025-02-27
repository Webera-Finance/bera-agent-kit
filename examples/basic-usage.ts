import { BeraAgent, createViemWalletClient } from '../src';

async function example() {
  const walletClient = createViemWalletClient();
  const agent = new BeraAgent({
    openAIConfig: {
      apiKey: process.env.OPENAI_API_KEY || '',
    },
    walletClient,
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
      // `check my bera, honey, bgt balance`,
      // `transfer 0.01 honey to 0xb6417F8a695a3470c3CB4f223f9598dc8EBe6f74`,
      // `swap 0.05 honey to bera at kodiak with slippage 1%`,
      `swap 0.05 honey to usdc at kodiak with slippage 1%`,
      // `swap 0.01 BERA to honey at kodiak with slippage 1%`,
      // 'Add liquidity V2 0.013 BERA and 0.1 honey at kodiak',
      // 'Add liquidity V2 0.01 usdc and 0.01 honey at kodiak. Dont need to confirm',
      // 'swap 0.01 bera to honey at bexswap',
      // `Transfer 100 bera to 0x1234567890123456789012345678901234567890`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap and send all the honey received to address 0x7xxx`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap, swap 0.0001 bera to honey at kodiak, then send all the honey received to address 0x7xxx`,
      // `check my honey-usdc.e balance and stake 0.01 honey-usdc.e at infrared`,
      // `check my honey-wbera balance and stake 0.1 honey-wbera at infrared`,
      `check my wbera-weth balance and stake 0.0011 wbera-weth at infrared`,
    );
    console.info(`Transfer Response (Agent): ${transfer}`);
    // console.info(`check my bera, honey, bgt balance`);

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
