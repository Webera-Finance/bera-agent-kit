"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTools = createTools;
const getBalance_1 = require("./common/getBalance");
const transfer_1 = require("./common/transfer");
const kodiakSwap_1 = require("./kodiak/kodiakSwap");
const bexSwap_1 = require("./bex/bexSwap");
const oogaBoogaSwap_1 = require("./oogaBooga/oogaBoogaSwap");
const bgtStationStake_1 = require("./bgtStation/bgtStationStake");
const bgtStationClaimBGT_1 = require("./bgtStation/bgtStationClaimBGT");
const infraredStakeIBGT_1 = require("./infrared/infraredStakeIBGT");
const getTokenBalance_1 = require("./common/getTokenBalance");
const infraredWithdrawStakedIBGT_1 = require("./infrared/infraredWithdrawStakedIBGT");
const bendSupply_1 = require("./bend/bendSupply");
const bendWithdraw_1 = require("./bend/bendWithdraw");
const bendBorrow_1 = require("./bend/bendBorrow");
const bendRepay_1 = require("./bend/bendRepay");
const bgtStationDelegateBGT_1 = require("./bgtStation/bgtStationDelegateBGT");
const bgtStationRedeem_1 = require("./bgtStation/bgtStationRedeem");
const liveSearch_1 = require("./tavilySearch/liveSearch");
function createTools(walletClient) {
    return {
        get_balance: getBalance_1.getBalanceTool,
        transfer: transfer_1.transferTool,
        kodiak_swap: kodiakSwap_1.kodiakSwapTool,
        bex_swap: bexSwap_1.bexSwapTool,
        ooga_booga_swap: oogaBoogaSwap_1.oogaBoogaSwapTool,
        bgt_station_stake: bgtStationStake_1.bgtStationStakeTool,
        bgt_station_claim_reward: bgtStationClaimBGT_1.bgtStationClaimRewardTool,
        infrared_stake_ibgt: infraredStakeIBGT_1.infraredStakeIBGTTool,
        infrared_withdraw_staked_ibgt: infraredWithdrawStakedIBGT_1.infraredWithdrawStakedIBGTTool,
        get_token_balance: getTokenBalance_1.getTokenBalanceTool,
        bend_supply: bendSupply_1.bendSupplyTool,
        bend_withdraw: bendWithdraw_1.bendWithdrawTool,
        bend_borrow: bendBorrow_1.bendBorrowTool,
        bend_repay: bendRepay_1.bendRepayTool,
        bgt_station_delegate: bgtStationDelegateBGT_1.bgtStationDelegateTool,
        bgt_station_redeem: bgtStationRedeem_1.bgtStationRedeemTool,
        liveSearch: liveSearch_1.liveSearchTool,
    };
}
//# sourceMappingURL=allTools.js.map