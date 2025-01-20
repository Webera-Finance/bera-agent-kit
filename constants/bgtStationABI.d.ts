export declare const BerachainRewardsVaultABI: readonly [{
    readonly type: "function";
    readonly name: "addIncentive";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "incentiveRate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "delegateStake";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "delegateWithdraw";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "distributor";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "earned";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "exit";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getDelegateStake";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "delegate";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReward";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getRewardForDuration";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getTotalDelegateStaked";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getWhitelistedTokens";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getWhitelistedTokensCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initialize";
    readonly inputs: readonly [{
        readonly name: "_berachef";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_bgt";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_distributor";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_stakingToken";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "lastTimeRewardApplicable";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "notifyRewardAmount";
    readonly inputs: readonly [{
        readonly name: "coinbase";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "reward";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "operator";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pause";
    readonly inputs: readonly [{
        readonly name: "_paused";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "recoverERC20";
    readonly inputs: readonly [{
        readonly name: "tokenAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "tokenAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "removeIncentiveToken";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "rewardPerToken";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setDistributor";
    readonly inputs: readonly [{
        readonly name: "_rewardDistribution";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setMaxIncentiveTokensCount";
    readonly inputs: readonly [{
        readonly name: "_maxIncentiveTokensCount";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setOperator";
    readonly inputs: readonly [{
        readonly name: "_operator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setRewardsDuration";
    readonly inputs: readonly [{
        readonly name: "_rewardsDuration";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "stake";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "whitelistIncentiveToken";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "minIncentiveRate";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "withdraw";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "DelegateStaked";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "delegate";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "DelegateWithdrawn";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "delegate";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "DistributorSet";
    readonly inputs: readonly [{
        readonly name: "distributor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "IncentiveAdded";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "incentiveRate";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "IncentiveTokenRemoved";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "IncentiveTokenWhitelisted";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "minIncentiveRate";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "IncentivesProcessed";
    readonly inputs: readonly [{
        readonly name: "coinbase";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "bgtEmitted";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "MaxIncentiveTokensCountUpdated";
    readonly inputs: readonly [{
        readonly name: "maxIncentiveTokensCount";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OperatorSet";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Recovered";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RewardAdded";
    readonly inputs: readonly [{
        readonly name: "reward";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RewardPaid";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "reward";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RewardsDurationUpdated";
    readonly inputs: readonly [{
        readonly name: "newDuration";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Staked";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Withdrawn";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AlreadyInitialized";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "AmountLessThanMinIncentiveRate";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BlockDoesNotExist";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BlockNotInBuffer";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "CannotRecoverRewardToken";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "CannotRecoverStakingToken";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "DelegateStakedOverflow";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsolventReward";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientDelegateStake";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientSelfStake";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientStake";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidCommission";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidCuttingBoardWeights";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidMaxIncentiveTokensCount";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidMinter";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidStartBlock";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvariantCheckFailed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MaxNumWeightsPerCuttingBoardIsZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoWhitelistedTokens";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotActionableBlock";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotApprovedSender";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotBGT";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotBlockRewardController";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotDelegate";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotDistributor";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotEnoughBalance";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotEnoughTime";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotFeeCollector";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotFriendOfTheChef";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotGovernance";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotOperator";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotProver";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotRootFollower";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotValidatorOrOperator";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PayoutAmountIsZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PayoutTokenIsZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "QueuedCuttingBoardNotFound";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "QueuedCuttingBoardNotReady";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RewardCycleNotEnded";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RewardCycleStarted";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "StakeAmountIsZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TokenAlreadyWhitelistedOrLimitReached";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TokenNotWhitelisted";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooManyWeights";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TotalSupplyOverflow";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Unauthorized";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "VaultAlreadyExists";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "WithdrawAmountIsZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAddress";
    readonly inputs: readonly [];
}];
//# sourceMappingURL=bgtStationABI.d.ts.map