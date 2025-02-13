import { getBalanceTool } from './getBalance';
import { getTokenBalanceTool } from './getTokenBalance';
import { transferTool } from './transfer';
import { kodiakAddLiquidityTool } from '../kodiak/kodiakAddLiquidityV2';
import { createViemWalletClient } from '../../utils/createViemWalletClient';
import { TOKEN } from '../../constants/index';
import { kodiakSwapTool } from '../kodiak/kodiakSwap';
import { bendBorrowTool } from '../bend/bendBorrow';
import { bendRepayTool } from '../bend/bendRepay';
import { TestnetChainConfig } from '../../constants/chain';

require('dotenv').config();

async function main() {
  console.log('test get balance');
  await testGetBalance();
  console.log('================');
  // console.log('test get token balance');
  // await testGetTokenBalance();
  // console.log('================');
  console.log('test transfer');
  await testTransfer();
  console.log('================');
  //   console.log('test kodiak add liquidity');
  //   await testKodiakAddLiquidityV2();
  //   console.log('================');
  //   console.log('test kodiak swap');
  //   await testKodiakSwap();
  //   console.log('================');
  // console.log('test bend borrow');
  // await testBendBorrow();
  // console.log('================');
  // console.log('test bend repay');
  // await testBendRepay();
  // console.log('================');
}
main();

async function testGetBalance() {
  const walletClient = createViemWalletClient();
  const test = await getBalanceTool.handler(
    {
      wallet: walletClient.account.address,
    },
    TestnetChainConfig,
    walletClient,
  );
  console.log(test);
}
async function testGetTokenBalance() {
  const walletClient = createViemWalletClient();
  //i use metamask
  const test = await getTokenBalanceTool.handler(
    {
      wallet: '0x5b538D74e7d1a5f1333c1F90e9E92876C43e73fA',
      tokenName: 'BGT',
    },
    TestnetChainConfig,
    walletClient,
  );
  console.log(test);
}

async function testTransfer() {
  // Create a wallet client
  const walletClient = createViemWalletClient();
  const test = await transferTool.handler(
    {
      to: '0xAca1de888cE2597541418109185c2Db63587A770',
      amount: 1.451929919251793,
      tokenAddress: '0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03',
    },
    TestnetChainConfig,
    walletClient,
  );
  console.log(test);
}

async function testKodiakAddLiquidityV2() {
  // Create a wallet client
  const walletClient = createViemWalletClient();
  const test = await kodiakAddLiquidityTool.handler(
    {
      tokenA: TOKEN.WBERA,
      tokenB: TOKEN.IBGT,
      amountADesired: 100,
      amountBDesired: 100,
      amountAMin: 95,
      amountBMin: 95,
      to: '0xasda0x5b538D74e7d1a5f1333c1F90e9E92876C43e73fAsdasd',
    },
    TestnetChainConfig,
    walletClient,
  );
  console.log(test);
}
async function testKodiakSwap() {
  const walletClient = createViemWalletClient();
  const test = await kodiakSwapTool.handler(
    {
      amountIn: 0.1,
      amountOutMin: 0.1,
      tokenOut: '0xasda0x5b538D74e7d1a5f1333c1F90e9E92876C43e73fAsdasd',
    },
    TestnetChainConfig,
    walletClient,
  );
  console.log(test);
}

async function testBendBorrow() {
  const walletClient = createViemWalletClient();
  const test = await bendBorrowTool.handler(
    {
      asset: TOKEN.WBERA,
      amount: 100,
      interestRateMode: 1,
    },
    TestnetChainConfig,
    walletClient,
  );
  console.log(test);
}

async function testBendRepay() {
  const walletClient = createViemWalletClient();
  const test = await bendRepayTool.handler(
    {
      asset: TOKEN.WBERA,
      amount: 100,
      interestRateMode: 1,
    },
    TestnetChainConfig,
    walletClient,
  );
  console.log(test);
}
