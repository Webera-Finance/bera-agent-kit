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

    // const transfer = await agent.sendMessage(
    //   `check my balance`,
    //   `Transfer 100 bera to 0x1234567890123456789012345678901234567890`,
    //   `check my bera balance and swap 0.0001 bera to honey at bexswap`,
    //   `check my bera balance and swap 0.0001 bera to honey at bexswap and send all the honey received to address 0x7xxx`
    //   `check my bera balance and swap 0.0001 bera to honey at bexswap, swap 0.0001 bera to honey at kodiak, then send all the honey received to address 0x7xxx`
    // );
    // console.info(`Transfer Response (Agent): ${transfer}`);

    // const rl = await agent.sendMessage(
    //   `Launch a new pool on RocketLaunch name "SuperPool", symbol "SP", total supply 1,000,000 SP, fixed cap 100 ETH, start time "2025-03-01 12:00:00 UTC", end time "2025-03-10 12:00:00 UTC" and image Url is https://cdn.rocketlaunch.fun/c/80094/t/80094-1739457440678-17f5d6f8-0874-48b2-8d5e-fb9aeaeab959/icon.png`,
    //   `Buy 100 batches of token from the pool at address "0x400ec12b49d4a186452c43d75017aff0bf2af406".`
    //   `Sell 100 batches of token from pool at address "0x400ec12b49d4a186452c43d75017aff0bf2af406"`
    //   `Claim token on rocketlaunch at address 0x400ec12b49d4a186452c43d75017aff0bf2af406`
    // );
    
    // console.info(`Launch Pool Response (Agent): ${rl}`);

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
