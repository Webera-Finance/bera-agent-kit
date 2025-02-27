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
import { ConfigChain } from '../constants/chain';
import { kodiakAddLiquidityToolV2 } from './kodiak/kodiakAddLiquidityV2';

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
    walletClient?: W,
    publicClient?: P,
    toolEnvConfigs?: Record<string, unknown>,
  ) => Promise<any>;
}

export function createTools(): Record<string, ToolConfig<any, WalletClient>> {
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
  };
}
