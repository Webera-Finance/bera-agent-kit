import { PublicClient, WalletClient } from 'viem';
import { getBalanceTool } from './common/getBalance';
import { transferTool } from './common/transfer';
import { kodiakSwapTool } from './kodiak/kodiakSwap';
import { bexSwapTool } from './bex/bexSwap';
import { oogaBoogaSwapTool } from './oogaBooga/oogaBoogaSwap';
import { bgtStationStakeTool } from './bgtStation/bgtStationStake';
import { bgtStationClaimRewardTool } from './bgtStation/bgtStationClaimBGT';
import { infraredStakeIBGTTool } from './infrared/infraredStakeIBGT';
import { getTokenBalanceTool } from './common/getTokenBalance';
import { infraredWithdrawStakedIBGTTool } from './infrared/infraredWithdrawStakedIBGT';
import { bendSupplyTool } from './bend/bendSupply';
import { bendWithdrawTool } from './bend/bendWithdraw';
import { bendBorrowTool } from './bend/bendBorrow';
import { bendRepayTool } from './bend/bendRepay';
import { bgtStationDelegateTool } from './bgtStation/bgtStationDelegateBGT';
import { bgtStationRedeemTool } from './bgtStation/bgtStationRedeem';
import { liveSearchTool } from './tavilySearch/liveSearch';
import { pot2pumpLaunchTool } from './honeypotFinance/pot2pumpLaunch';
import { pot2pumpClaimTool } from './honeypotFinance/pot2pumpClaim';
import { pot2pumpDepositTool } from './honeypotFinance/pot2pumpDeposit';
import { infraredStakeHoneyByusdTool } from './infrared/infraredStakeHoneyByusd';
import { infraredStakeHoneyUsdceTool } from './infrared/infraredStakeHoneyUsdce';

import { ConfigChain } from '../constants/chain';
import { kodiakAddLiquidityToolV2 } from './kodiak/kodiakAddLiquidityV2';
import { infraredStakeHoneyWBeraTool } from './infrared/infraredStakeHoneyWBera';
import { infraredStakeWBeraWBTCTool } from './infrared/infraredStakeWBeraWBTC';
import { infraredStakeWBeraWETHTool } from './infrared/infraredStakeWBeraWETH';
import { infraredStakeBeraTool } from './infrared/infraredStakeBera';
import { memeSwapStakeBeraTool } from './memeswap/memeswapStakeBera';
import { ToolEnvConfigs } from '../constants/types';
import { weberaDepositTool } from './webera/deposit';
import { weberaWithdrawTool } from './webera/withdraw';
import { beraborrowDepositNectTool } from './beraborrow/beraborrowDepositNect';
import { beraHubStakeLPTokenTool } from './berahub/beraHubStakeLPToken';
import { beraHubClaimBGTTool } from './berahub/berahubClaimBGT';

export interface ToolConfig<T = any, W = WalletClient, P = PublicClient> {
  definition: {
    type: 'function';
    function: {
      name: string;
      description: string;
      parameters: {
        type: 'object';
        properties: Record<string, unknown>;
        required: string[];
      };
    };
  };
  handler: (
    args: T,
    config: ConfigChain,
    walletClient: W,
    publicClient: P,
    toolEnvConfigs?: ToolEnvConfigs,
  ) => Promise<any>;
}

export function createTools(): Record<
  string,
  ToolConfig<any, WalletClient, PublicClient>
> {
  return {
    get_balance: getBalanceTool,
    transfer: transferTool,
    kodiak_swap: kodiakSwapTool,
    kodiak_add_liquidity_v2: kodiakAddLiquidityToolV2,
    bex_swap: bexSwapTool,
    ooga_booga_swap: oogaBoogaSwapTool,
    bgt_station_stake: bgtStationStakeTool,
    bgt_station_claim_reward: bgtStationClaimRewardTool,
    bgt_station_delegate: bgtStationDelegateTool,
    bgt_station_redeem: bgtStationRedeemTool,
    infrared_stake_ibgt: infraredStakeIBGTTool,
    infrared_withdraw_staked_ibgt: infraredWithdrawStakedIBGTTool,
    get_token_balance: getTokenBalanceTool,
    bend_supply: bendSupplyTool,
    bend_withdraw: bendWithdrawTool,
    bend_borrow: bendBorrowTool,
    bend_repay: bendRepayTool,
    liveSearch: liveSearchTool,
    pot2pump_launch: pot2pumpLaunchTool,
    pot2pump_claim: pot2pumpClaimTool,
    pot2pump_deposit: pot2pumpDepositTool,
    infrared_stake_honey_byusd: infraredStakeHoneyByusdTool,
    infrared_stake_honey_usdce: infraredStakeHoneyUsdceTool,
    infrared_stake_honey_wbera: infraredStakeHoneyWBeraTool,
    infrared_stake_wbera_wbtc: infraredStakeWBeraWBTCTool,
    infrared_stake_wbera_weth: infraredStakeWBeraWETHTool,
    infrared_stake_bera: infraredStakeBeraTool,
    memeswap_stake_bera: memeSwapStakeBeraTool,
    webera_deposit: weberaDepositTool,
    webera_withdraw: weberaWithdrawTool,
    beraborrow_deposit_nect: beraborrowDepositNectTool,
    berahub_stake_lp: beraHubStakeLPTokenTool,
    berahub_claim_bgt: beraHubClaimBGTTool,
  };
}
