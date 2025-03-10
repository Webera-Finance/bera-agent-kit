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
    await agent.initialize();

    // const balanceResponse = await agent.sendMessage(
    //   `Check my wallet balance with the wallet address ${agent.getWalletClient().account!.address}`,
    // );
    // log.info(`Balance Check Response (Agent): ${balanceResponse}`);

    const response = await agent.sendMessage(
      // `check my bera, honey, bgt balance`,
      // `transfer 0.01 honey to 0xb6417F8a695a3470c3CB4f223f9598dc8EBe6f74`,
      // `swap 0.05 honey to bera at kodiak with slippage 1%`,
      // `swap 0.05 honey to usdc at kodiak with slippage 1%`,
      // `swap 0.01 BERA to honey at kodiak with slippage 1%`,
      // 'Add liquidity V2 0.013 BERA and 0.1 honey at kodiak',
      // 'Add liquidity V2 0.01 usdc and 0.01 honey at kodiak. Dont need to confirm',
      // 'swap 0.01 bera to honey at bexswap with slippage 1%',
      // 'swap 0.001 honey to bera at bexswap with slippage 1%',
      // 'swap 0.01 usdc to honey at bexswap with slippage 1%',
      // 'deposit 0.01 bera to bera vault at Webera',
      // 'deposit 0.01 honey to honey vault at Webera',
      // 'withdraw 0.01 bera from bera vault at Webera',
      // 'withdraw 0.01 honey from honey vault at Webera',
      // 'deposit 0.01 bera to beralst vault at Webera',
      // `Transfer 100 bera to 0x1234567890123456789012345678901234567890`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap and send all the honey received to address 0x7xxx`,
      // `check my bera balance and swap 0.0001 bera to honey at bexswap, swap 0.0001 bera to honey at kodiak, then send all the honey received to address 0x7xxx`,
      // `check my honey-usdc.e balance and stake 0.01 honey-usdc.e at infrared`,
      // `stake 10 honey-wbera at infrared`,
      // `check my wbera-weth balance and stake 0.0011 wbera-weth at infrared`,
      // "Which protocols on Berachain offer both yield and governance incentives?"
      // "withdraw 0.1 IBGT staked balance in the infrared protocol"
      'deposit 0.01 nectar into the beraborrow pool'
    );
    console.info('Result:', response);

    // const transfer = await agent.sendMessage(
    //   // `check my bera, honey, bgt balance`,
    //   // `transfer 0.01 honey to 0xb6417F8a695a3470c3CB4f223f9598dc8EBe6f74`,
    //   // `swap 0.05 honey to bera at kodiak with slippage 1%`,
    //   // `swap 0.05 honey to usdc at kodiak with slippage 1%`,
    //   `swap 0.01 BERA to honey at kodiak with slippage 1%`,
    //   // 'Add liquidity V2 0.013 BERA and 0.1 honey at kodiak',
    //   // 'Add liquidity V2 0.01 usdc and 0.01 honey at kodiak. Dont need to confirm',
    //   // 'swap 0.01 bera to honey at bexswap',
    //   // `Transfer 100 bera to 0x1234567890123456789012345678901234567890`,
    //   // `check my bera balance and swap 0.0001 bera to honey at bexswap`,
    //   // `check my bera balance and swap 0.0001 bera to honey at bexswap and send all the honey received to address 0x7xxx`,
    //   // `check my bera balance and swap 0.0001 bera to honey at bexswap, swap 0.0001 bera to honey at kodiak, then send all the honey received to address 0x7xxx`,
    //   // `check my honey-usdc.e balance and stake 0.01 honey-usdc.e at infrared`,
    //   // `check my honey-wbera balance and stake 0.1 honey-wbera at infrared`,
    //   // `check my wbera-weth balance and stake 0.0011 wbera-weth at infrared`,
    //   // `check my IBGT balance and stake 0.01 IBGT tokens into a vault in the Infrared protocol`,
    //   // `check my IBGT staked balance in the infrared protocol and withdraw 0.01`,
    //   // 'stake 0.01 Bera at infrared protocol',
    // );
    // console.info(`Transfer Response (Agent): ${transfer}`);

    // // Get balance action demo
    // const walletAddress = walletClient.account?.address || '';
    // const balanceResult = await agent.sendMessage(
    //   `get_balance: {"wallet": "${walletAddress}"}`
    // );
    // console.info("Balance Result:", balanceResult);

    // // Bex swap action demo
    // const bexSwapResult = await agent.sendMessage(
    //   'bex_swap: {"base": "0xBaseTokenAddress", "quote": "0xQuoteTokenAddress", "amount": 100}'
    // );
    // console.info("Bex Swap Transaction:", bexSwapResult);

    // // Bend borrow action demo
    // const bendBorrowResult = await agent.sendMessage(
    //   'bend_borrow: {"asset": "0xAssetAddress", "amount": 50, "interestRateMode": 2}'
    // );
    // console.info("Bend Borrow Transaction:", bendBorrowResult);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
}
