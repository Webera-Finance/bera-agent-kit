export declare const GAME_ABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_yeetTokenAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_reward";
        readonly type: "address";
        readonly internalType: "contract Reward";
    }, {
        readonly name: "_staking";
        readonly type: "address";
        readonly internalType: "contract StakeV2";
    }, {
        readonly name: "_gameSettings";
        readonly type: "address";
        readonly internalType: "contract YeetGameSettings";
    }, {
        readonly name: "_publicGoodsAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_teamAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_yeetardsNFTsAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_entropy";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_entropyProvider";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "BOOSTRAP_PHASE_DURATION";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "COOLDOWN_TIME";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MINIMUM_YEET_POINT";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "POT_DIVISION";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "TAX_PER_YEET";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "TAX_TO_PUBLIC_GOODS";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "TAX_TO_STAKERS";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "TAX_TO_TREASURY";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "YEETBACK_PERCENTAGE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "YEET_TIME_SECONDS";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "claim";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "endOfYeetTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "gameSettings";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract YeetGameSettings";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getBoostedValue";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "tokenIds";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getDistribution";
    readonly inputs: readonly [{
        readonly name: "yeetAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getNFTBoost";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "tokenIds";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getWinner";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct Yeet.Winner";
        readonly components: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "round";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "hasCooldownEnded";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isBoostrapPhase";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isRoundFinished";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastYeeted";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastYeetedAt";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "minimumYeetPoint";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "nftBoostLookup";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "nrOfYeets";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pause";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "paused";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "payoutPublicGoods";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "payoutTreasuryRevenue";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "potToWinner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "potToYeetback";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "publicGoodsAddress";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "publicGoodsAmount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "restart";
    readonly inputs: readonly [{
        readonly name: "userRandomNumber";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "rewardsContract";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract Reward";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "roundNumber";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "roundStartTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setPublicGoodsAddress";
    readonly inputs: readonly [{
        readonly name: "_publicGoodsAddress";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setTreasuryRevenueAddress";
    readonly inputs: readonly [{
        readonly name: "_treasuryRevenueAddress";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setYeetardsNFTsAddress";
    readonly inputs: readonly [{
        readonly name: "_yeetardsNFTsAddress";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "stakingContract";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract StakeV2";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "treasuryRevenueAddress";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "treasuryRevenueAmount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "unpause";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateStakingContract";
    readonly inputs: readonly [{
        readonly name: "_staking";
        readonly type: "address";
        readonly internalType: "contract StakeV2";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "winnings";
    readonly inputs: readonly [{
        readonly name: "";
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
    readonly name: "yeet";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "yeet";
    readonly inputs: readonly [{
        readonly name: "tokenIds";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "yeetTimeInSeconds";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "yeetTokenAddress";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "yeetardsNFTsAddress";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "yeetback";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract Yeetback";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "Claim";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "timestamp";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Paused";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PublicGoodsPaidOut";
    readonly inputs: readonly [{
        readonly name: "add";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "timestamp";
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
    readonly name: "RoundStarted";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "startTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "yeetTimeInSeconds";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "potDivision";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "taxPerYeet";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "taxToStakers";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "taxToPublicGoods";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "taxToTreasury";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "yeetbackPercentage";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "cooldownTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RoundWinner";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "timestamp";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "round";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "nrOfYeets";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TreasuryRevenuePaidOut";
    readonly inputs: readonly [{
        readonly name: "add";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "timestamp";
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
    readonly name: "Unpaused";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UpdatedPublicGoodsAddress";
    readonly inputs: readonly [{
        readonly name: "add";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UpdatedTreasuryRevenueAddress";
    readonly inputs: readonly [{
        readonly name: "add";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UpdatedYeetardsNFTsAddress";
    readonly inputs: readonly [{
        readonly name: "add";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Yeet";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "timestamp";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "basisPointTaxed";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amountToPot";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amountToYeetback";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "potAfterYeet";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "yeetbackAfterYeet";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "newYeetTimeInSeconds";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "newMinimumYeetPoint";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "nrOfYeets";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "round";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "timeLeftOnTimer";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "YeetDistribution";
    readonly inputs: readonly [{
        readonly name: "totalAmountYeeted";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "valueToPot";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "valueToYeetback";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "valueToStakers";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "publicGoods";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "teamRevenue";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Yeetard";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "timestamp";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "potToWinnerAfter";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "newMinimumYeetPoint";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "round";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "CooldownNotEnded";
    readonly inputs: readonly [{
        readonly name: "currentTime";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "cooldownEndTime";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "DuplicateTokenId";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "EnforcedPause";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ExpectedPause";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientYeet";
    readonly inputs: readonly [{
        readonly name: "provided";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "minimum";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "InvalidRandomNumber";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NFTNotEligibleForBoost";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "NoWinningsToClaim";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "NotEnoughValueToPayEntropyFee";
    readonly inputs: readonly [{
        readonly name: "value";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "fee";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "ReentrancyGuardReentrantCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RoundStillLive";
    readonly inputs: readonly [{
        readonly name: "roundNumber";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "ToManyTokenIds";
    readonly inputs: readonly [{
        readonly name: "length";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "UserDoesNotOwnNFTs";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "YeetTimePassed";
    readonly inputs: readonly [{
        readonly name: "currentTime";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "endTime";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}];
export declare const REWARD_ABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly type: "address";
        readonly internalType: "contract IERC20";
    }, {
        readonly name: "_settings";
        readonly type: "address";
        readonly internalType: "contract RewardSettings";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "acceptOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "addYeetVolume";
    readonly inputs: readonly [{
        readonly name: "user";
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
    readonly name: "claim";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "clawbackTokens";
    readonly inputs: readonly [{
        readonly name: "tokenAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "currentEpoch";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "currentEpochEnd";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "currentEpochStart";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "epochRewards";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getClaimableAmount";
    readonly inputs: readonly [{
        readonly name: "user";
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
    readonly name: "getEpochRewardsForCurrentEpoch";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getLastMidnight";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastClaimedForEpoch";
    readonly inputs: readonly [{
        readonly name: "";
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
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pendingOwner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "punchItChewie";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "rewardsSettings";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract RewardSettings";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setYeetContract";
    readonly inputs: readonly [{
        readonly name: "_yeetContract";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "token";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IERC20";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "totalYeetVolume";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "userYeetVolume";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
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
    readonly name: "yeetContract";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "EpochStarted";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "startTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "endTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "rewards";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferStarted";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ParsecSkipper";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "startEpoch";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "endEpoch";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Rewarded";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "timestamp";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}];
export declare const STAKE_ABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_stakingToken";
        readonly type: "address";
        readonly internalType: "contract IERC20";
    }, {
        readonly name: "_zapper";
        readonly type: "address";
        readonly internalType: "contract IZapper";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_wbera";
        readonly type: "address";
        readonly internalType: "contract IWETH";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "STAKING_LIMIT";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "accumulatedDeptRewardsYeet";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "accumulatedRewards";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "addManager";
    readonly inputs: readonly [{
        readonly name: "_manager";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly inputs: readonly [{
        readonly name: "";
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
    readonly name: "calculateRewardsEarned";
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
    readonly name: "calculateVesting";
    readonly inputs: readonly [{
        readonly name: "vesting";
        readonly type: "tuple";
        readonly internalType: "struct StakeV2.Vesting";
        readonly components: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "start";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "end";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "claimRewardsInNative";
    readonly inputs: readonly [{
        readonly name: "amountToWithdraw";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "swapData0";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swapData1";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claimRewardsInToken";
    readonly inputs: readonly [{
        readonly name: "amountToWithdraw";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "outputToken";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "swap0";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swap1";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claimRewardsInToken0";
    readonly inputs: readonly [{
        readonly name: "amountToWithdraw";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "swapData";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claimRewardsInToken1";
    readonly inputs: readonly [{
        readonly name: "amountToWithdraw";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "swapData";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "depositReward";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "depositWBERA";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "executeRewardDistribution";
    readonly inputs: readonly [{
        readonly name: "swap0";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swap1";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "executeRewardDistributionYeet";
    readonly inputs: readonly [{
        readonly name: "swap";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getRewardIndex";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVestings";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct StakeV2.Vesting[]";
        readonly components: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "start";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "end";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "managers";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "rageQuit";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "removeManager";
    readonly inputs: readonly [{
        readonly name: "_manager";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "rewardIndex";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
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
    readonly name: "stakedTimes";
    readonly inputs: readonly [{
        readonly name: "";
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
    readonly name: "stakingToken";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IERC20";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "startUnstake";
    readonly inputs: readonly [{
        readonly name: "unStakeAmount";
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
    readonly name: "totalVaultShares";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "unstake";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "vestings";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "start";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "end";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "wbera";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IWETH";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "zapper";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IZapper";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "Claimed";
    readonly inputs: readonly [{
        readonly name: "addr";
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
    readonly name: "RageQuit";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amountBurned";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RageQuitEnabled";
    readonly inputs: readonly [{
        readonly name: "enabled";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RewardDeposited";
    readonly inputs: readonly [{
        readonly name: "sender";
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
    readonly name: "RewardsDistributed";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "rewardIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RewardsDistributedToken0";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "rewardIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Stake";
    readonly inputs: readonly [{
        readonly name: "addr";
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
    readonly name: "Unstake";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VestingStarted";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "ReentrancyGuardReentrantCall";
    readonly inputs: readonly [];
}];
export declare const LOTTERY_ABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_entropy";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_entropyProvider";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_entropyCallback";
    readonly inputs: readonly [{
        readonly name: "sequence";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "provider";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "randomNumber";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "acceptOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "addYeetback";
    readonly inputs: readonly [{
        readonly name: "userRandomNumber";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "round";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "addYeetsInRound";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "amountOfWins";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "amountToWinners";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "claim";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claimable";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "user";
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
    readonly name: "claimed";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "finishedSequenceNumbers";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getEntropyFee";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getYeetsInRound";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pendingOwner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "potForRound";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "sequenceToRound";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "yeetsInRound";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "Claimed";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "user";
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
    readonly name: "OwnershipTransferStarted";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RandomNumberRequested";
    readonly inputs: readonly [{
        readonly name: "sequenceNumber";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "YeetbackAdded";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly indexed: true;
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
    readonly name: "YeetbackWinner";
    readonly inputs: readonly [{
        readonly name: "round";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "winner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "winningYeetIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "ReentrancyGuardReentrantCall";
    readonly inputs: readonly [];
}];
export declare const ZAPPER_ABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_swapRouter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_kodiakV1RouterStaking";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_wbera";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "kodiakStakingRouter";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IKodiakV1RouterStaking";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "referralCode";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setCompoundingVault";
    readonly inputs: readonly [{
        readonly name: "vault";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isWhitelisted";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setKodiakStakingRouter";
    readonly inputs: readonly [{
        readonly name: "router";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setReferralCode";
    readonly inputs: readonly [{
        readonly name: "code";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setSwapRouter";
    readonly inputs: readonly [{
        readonly name: "_swapRouter";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "swapRouter";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IOBRouter";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateSwappableTokens";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isWhitelisted";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateWhitelistedKodiakVault";
    readonly inputs: readonly [{
        readonly name: "vault";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isEnabled";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "wbera";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IWETH";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "whitelistedCompoundingVaults";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "whitelistedKodiakVaults";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "whitelistedTokens";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "zapIn";
    readonly inputs: readonly [{
        readonly name: "inputToken";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "swapToToken0";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swapToToken1";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapInNative";
    readonly inputs: readonly [{
        readonly name: "swapData0";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swapData1";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "islandTokensReceived";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "vaultSharesReceived";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "zapInToken0";
    readonly inputs: readonly [{
        readonly name: "swapData";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapInToken1";
    readonly inputs: readonly [{
        readonly name: "swapData";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapInWithMultipleTokens";
    readonly inputs: readonly [{
        readonly name: "swapParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.MultiSwapParams";
        readonly components: readonly [{
            readonly name: "inputTokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "swapToToken0";
            readonly type: "tuple[]";
            readonly internalType: "struct IZapper.SingleTokenSwap[]";
            readonly components: readonly [{
                readonly name: "inputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputQuote";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "executor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "path";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "swapToToken1";
            readonly type: "tuple[]";
            readonly internalType: "struct IZapper.SingleTokenSwap[]";
            readonly components: readonly [{
                readonly name: "inputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputQuote";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "executor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "path";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapInWithoutSwap";
    readonly inputs: readonly [{
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "islandTokensReceived";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "vaultSharesReceived";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapOut";
    readonly inputs: readonly [{
        readonly name: "outputToken";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "receiver";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "swap0";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swap1";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "totalAmountOut";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapOutNative";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "swapData0";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swapData1";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "totalNativeOut";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapOutToToken0";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "swapData";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "totalToken0Out";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "zapOutToToken1";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "swapData";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.SingleTokenSwap";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "unstakeParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultUnstakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "redeemParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultRedeemParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "totalToken1Out";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TokenWhitelisted";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "isWhitelisted";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "ReentrancyGuardReentrantCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SafeERC20FailedOperation";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }];
}];
export declare const VAULT_ABI: readonly [{
    readonly type: "function";
    readonly name: "allocateXKDKToKodiakRewards";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "beradromeFarmPlugin";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPlugin";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "beradromeFarmRewardsGauge";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IGauge";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "cancelRedeem";
    readonly inputs: readonly [{
        readonly name: "redeemIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "compound";
    readonly inputs: readonly [{
        readonly name: "swapInputTokens";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "swapToToken0";
        readonly type: "tuple[]";
        readonly internalType: "struct IZapper.SingleTokenSwap[]";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "swapToToken1";
        readonly type: "tuple[]";
        readonly internalType: "struct IZapper.SingleTokenSwap[]";
        readonly components: readonly [{
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputQuote";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "stakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.KodiakVaultStakingParams";
        readonly components: readonly [{
            readonly name: "kodiakVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount0Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountSharesMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "vaultStakingParams";
        readonly type: "tuple";
        readonly internalType: "struct IZapper.VaultDepositParams";
        readonly components: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "deallocateXKDK";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "exitFeeBasisPoints";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "finalizeRedeem";
    readonly inputs: readonly [{
        readonly name: "redeemIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "harvestBeradromeRewards";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "harvestKodiakRewards";
    readonly inputs: readonly [{
        readonly name: "previousKodiakRewardTokens";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "initiateRedeem";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "duration";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "kodiakRewards";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "maxAllowedFeeBps";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setAllocationFlagxKDK";
    readonly inputs: readonly [{
        readonly name: "flag";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setExitFeeBasisPoints";
    readonly inputs: readonly [{
        readonly name: "newFeeBps";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setKodiakRewards";
    readonly inputs: readonly [{
        readonly name: "newKodiakRewards";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setStrategyManager";
    readonly inputs: readonly [{
        readonly name: "manager";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isWhitelisted";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setTreasury";
    readonly inputs: readonly [{
        readonly name: "newTreasury";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setXKdk";
    readonly inputs: readonly [{
        readonly name: "newXKdk";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setZapper";
    readonly inputs: readonly [{
        readonly name: "newZapper";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "strategyManager";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "totalAssets";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "treasury";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "updateRedeemRewardsAddress";
    readonly inputs: readonly [{
        readonly name: "redeemIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "xKdk";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "zapper";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IZapper";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "BeradromeRewardsHarvested";
    readonly inputs: readonly [{
        readonly name: "harvestor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ExitFeeBasisPointsSet";
    readonly inputs: readonly [{
        readonly name: "oldFeeBps";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "newFeeBps";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "FeeCollected";
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "treasury";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "fees";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "KodiakRewardsHarvested";
    readonly inputs: readonly [{
        readonly name: "harvestor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "previousKodiakRewardTokens";
        readonly type: "address[]";
        readonly indexed: false;
        readonly internalType: "address[]";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "KodiakRewardsUpdated";
    readonly inputs: readonly [{
        readonly name: "oldKodiakRewards";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "newKodiakRewards";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "StrategyManagerUpdated";
    readonly inputs: readonly [{
        readonly name: "manager";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "isWhitelisted";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TreasuryUpdated";
    readonly inputs: readonly [{
        readonly name: "oldTreasury";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "newTreasury";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VaultCompounded";
    readonly inputs: readonly [{
        readonly name: "strategyManager";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "compoundAmount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "XKdkUpdated";
    readonly inputs: readonly [{
        readonly name: "oldXKdk";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "newXKdk";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ZapperUpdated";
    readonly inputs: readonly [{
        readonly name: "oldZapper";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "newZapper";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "xKDKAllocationFlagUpdated";
    readonly inputs: readonly [{
        readonly name: "oldFlag";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "flag";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}];
//# sourceMappingURL=yeetABI.d.ts.map