export declare const TokenABI: readonly [{
    readonly constant: true;
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
    readonly payable: false;
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly constant: false;
    readonly inputs: readonly [{
        readonly name: "_spender";
        readonly type: "address";
    }, {
        readonly name: "_value";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly payable: false;
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly constant: true;
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly payable: false;
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly constant: false;
    readonly inputs: readonly [{
        readonly name: "_from";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly name: "_value";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly payable: false;
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly constant: true;
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly payable: false;
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly constant: true;
    readonly inputs: readonly [{
        readonly name: "_owner";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "balance";
        readonly type: "uint256";
    }];
    readonly payable: false;
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly constant: true;
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
    readonly payable: false;
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly constant: false;
    readonly inputs: readonly [{
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly name: "_value";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly payable: false;
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly constant: true;
    readonly inputs: readonly [{
        readonly name: "_owner";
        readonly type: "address";
    }, {
        readonly name: "_spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly payable: false;
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly payable: true;
    readonly stateMutability: "payable";
    readonly type: "fallback";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}];
export declare const BGTABI: readonly [{
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmountLessThanMinIncentiveRate";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BlockDoesNotExist";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BlockNotInBuffer";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotRecoverRewardToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotRecoverStakingToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CheckpointUnorderedInsertion";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DelegateStakedOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "length";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "increasedSupply";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "cap";
        readonly type: "uint256";
    }];
    readonly name: "ERC20ExceededSafeSupply";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "allowance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "approver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "timepoint";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint48";
        readonly name: "clock";
        readonly type: "uint48";
    }];
    readonly name: "ERC5805FutureLookup";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ERC6372InconsistentClock";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsolventReward";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientDelegateStake";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientSelfStake";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientStake";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "currentNonce";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAccountNonce";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidCommission";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidCuttingBoardWeights";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidMaxIncentiveTokensCount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidMinter";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidStartBlock";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvariantCheckFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MaxNumWeightsPerCuttingBoardIsZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NoWhitelistedTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotActionableBlock";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotApprovedSender";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotBGT";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotBlockRewardController";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotDelegate";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotDistributor";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotEnoughBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotEnoughTime";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotFeeCollector";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotFriendOfTheChef";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotGovernance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotOperator";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotProver";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotRootFollower";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotValidatorOrOperator";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PayoutAmountIsZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PayoutTokenIsZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueuedCuttingBoardNotFound";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueuedCuttingBoardNotReady";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RewardCycleNotEnded";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "StakeAmountIsZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TokenAlreadyWhitelistedOrLimitReached";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TokenNotWhitelisted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TooManyWeights";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TotalSupplyOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "Unauthorized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultAlreadyExists";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "expiry";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WithdrawAmountIsZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroAddress";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "ActivateBoost";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previous";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "current";
        readonly type: "address";
    }];
    readonly name: "BeraChefChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "CancelBoost";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "delegator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "fromDelegate";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "toDelegate";
        readonly type: "address";
    }];
    readonly name: "DelegateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "delegate";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "previousVotes";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newVotes";
        readonly type: "uint256";
    }];
    readonly name: "DelegateVotesChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "DropBoost";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "version";
        readonly type: "uint64";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previous";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "current";
        readonly type: "address";
    }];
    readonly name: "MinterChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "QueueBoost";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "Redeem";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "SenderWhitelisted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldRate";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newRate";
        readonly type: "uint256";
    }];
    readonly name: "UpdateCommission";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }];
    readonly name: "activateBoost";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "beraChef";
    readonly outputs: readonly [{
        readonly internalType: "contract IBeraChef";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }];
    readonly name: "boosted";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }];
    readonly name: "boostedQueue";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "blockNumberLast";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint128";
        readonly name: "balance";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "rewardRate";
        readonly type: "uint256";
    }];
    readonly name: "boostedRewardRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }];
    readonly name: "boostees";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "boosts";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "cancelBoost";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "pos";
        readonly type: "uint32";
    }];
    readonly name: "checkpoints";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint48";
            readonly name: "_key";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint208";
            readonly name: "_value";
            readonly type: "uint208";
        }];
        readonly internalType: "struct Checkpoints.Checkpoint208";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "rewardRate";
        readonly type: "uint256";
    }];
    readonly name: "commissionRewardRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }];
    readonly name: "commissions";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "blockNumberLast";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint224";
        readonly name: "rate";
        readonly type: "uint224";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "delegatee";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "delegatee";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "expiry";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "dropBoost";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly internalType: "bytes1";
        readonly name: "fields";
        readonly type: "bytes1";
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "verifyingContract";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "extensions";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "timepoint";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "timepoint";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "isWhitelistedSender";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "distributor";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "minter";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "numCheckpoints";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly internalType: "uint128";
        readonly name: "amount";
        readonly type: "uint128";
    }];
    readonly name: "queueBoost";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "queuedBoost";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "redeem";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_beraChef";
        readonly type: "address";
    }];
    readonly name: "setBeraChef";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "validator";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "rate";
        readonly type: "uint256";
    }];
    readonly name: "setCommission";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_minter";
        readonly type: "address";
    }];
    readonly name: "setMinter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_staker";
        readonly type: "address";
    }];
    readonly name: "setStaker";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "staker";
    readonly outputs: readonly [{
        readonly internalType: "contract BGTStaker";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalBoosts";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "unboostedBalanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "whitelistSender";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=tokenABI.d.ts.map