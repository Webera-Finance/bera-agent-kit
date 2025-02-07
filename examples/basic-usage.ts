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
    //   `check my bera balance and swap 0.0001 bera to honey at bexswap, swap 0.0001 bera to honey at kodiak, then send all the honey received to address 0x7xxx`,
    // );
    // console.info(`Transfer Response (Agent): ${transfer}`);

    // const rocketLaunch = await agent.sendMessage(
    //   `I want to launch a new pool on RocketLaunch with the following details:
    //      Name: "Skibidi Toilet"
    //      Symbol: "SKT"
    //      Decimals: 18
    //      Total Supply: 1,000,000,000 * 10^18 = 1,000,000,000,000,000,000,000,000
    //      Fixed Cap (ETH): 2 (in wei: 2,000,000,000,000,000,000)
    //      Tokens for Airdrop: 50,000,000 * 10^18 = 50,000,000,000,000,000,000,000
    //      Tokens for Farming: 50,000,000 * 10^18 = 50,000,000,000,000,000,000,000
    //      Tokens for Sale: 700,000,000 * 10^18 = 700,000,000,000,000,000,000,000
    //      Tokens for Liquidity Pool: 200,000,000 * 10^18 = 200,000,000,000,000,000,000,000
    //      Tokens per Purchase: 700,000 * 10^18 = 700,000,000,000,000,000,000,000
    //      Max Repeat Purchase: 100,000 * 10^18 = 100,000,000,000,000,000,000
    //      Start Time: February 8, 2025, at 00:00 UTC (Unix timestamp: 1738972800)
    //      Min Sale Duration: 1 hour
    //      Max Sale Duration: 2 days
    //      Metadata URL: "https://mot-stg-api.rocketlaunch.fun/c/80084/t/80084-1738827789025-efc4c2b1-e6d1-4714-be16-2c1dd2707c36/metadata"
    //      Number of Batches: 0
    //      Max Amount (ETH): 0
    //      Referrer: 0x94c50adE2758ce8b8b70CFC7B0a9901494a35E3A`,

    //   `I want to buy tokens from a specific pool on RocketLaunch with the following details:
    //      Pool Address: 0x1234567890123456789012345678901234567890
    //      Number of Batches: 1
    //      Max Amount (ETH): 0.1
    //      referrer: 0x94c50adE2758ce8b8b70CFC7B0a9901494a35E3A`,

    //   `I want to sell tokens from a specific pool on RocketLaunch with the following details:
    //      Pool Address: 0x1234567890123456789012345678901234567890
    //      Amount: 1000000000000000000`,

    //   `I want to claim tokens from a specific pool on RocketLaunch with the following details:
    //      Pool Address: 0x1234567890123456789012345678901234567890`

    // )
    // console.info(`RocketLaunch Response (Agent): ${rocketLaunch}`);

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
