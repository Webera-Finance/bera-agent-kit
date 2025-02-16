export const rocketLaunchABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenForAirdrop",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenForFarm",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenForSale",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenForLiquidity",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "capInETH",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalBatch",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "string",
                name: "metadata",
                type: "string"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startTime",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endTime",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "minDurationSell",
                type: "uint256"
            }
        ],
        name: "ActivePool",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "paidETH",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address"
            }
        ],
        name: "Bought",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "Claimed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            }
        ],
        name: "CompletedPool",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                indexed: false,
                internalType: "string",
                name: "symbol",
                type: "string"
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "decimals",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256"
            }
        ],
        name: "CreateToken",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            }
        ],
        name: "FailPool",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            }
        ],
        name: "Finalized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            }
        ],
        name: "FullPool",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "receivedETH",
                type: "uint256"
            }
        ],
        name: "Refund",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32"
            }
        ],
        name: "RoleAdminChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "RoleGranted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "RoleRevoked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "seller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "receivedETH",
                type: "uint256"
            }
        ],
        name: "Sold",
        type: "event"
    },
    {
        stateMutability: "payable",
        type: "fallback"
    },
    {
        inputs: [],
        name: "ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "BASE_DENOMINATOR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "BLOCK_INTERVAL",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "DEAD_ADDR",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "MINIMUM_CAP",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                "components": [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "fixedCapETH",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForAirdrop",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForFarm",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForSale",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForAddLP",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenPerPurchase",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxRepeatPurchase",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "minDurationSell",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxDurationSell",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "metadata",
                        type: "string"
                    }
                ],
                internalType: "struct RocketBera.ActivePoolParams",
                name: "params",
                type: "tuple"
            }
        ],
        name: "activePool",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "boughtCheck",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "numberBatch",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "maxAmountETH",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "referrer",
                type: "address"
            }
        ],
        name: "buy",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "buyerArr",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address"
            }
        ],
        name: "caculateUnlockedPercent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address"
            }
        ],
        name: "claimToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "completedTransfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "counterSoldUsers",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string"
            },
            {
                internalType: "uint8",
                name: "decimals",
                type: "uint8"
            },
            {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256"
            }
        ],
        name: "createRocketToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "batchNumber",
                type: "uint256"
            }
        ],
        name: "estimateBuy",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "batchNumber",
                type: "uint256"
            }
        ],
        name: "estimateSell",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "farms",
        outputs: [
            {
                internalType: "uint256",
                name: "rewardPerBlock",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "lastRewardBlock",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "accTokenPerShare",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "isDisable",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            }
        ],
        name: "finalize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveOut",
                type: "uint256"
            }
        ],
        name: "getAmountIn",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveOut",
                type: "uint256"
            }
        ],
        name: "getAmountOut",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            }
        ],
        name: "getMaxBatchCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            }
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_platformAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_platformFee",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_feeAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_fee",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_airdropAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "_routerV2",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_blockInterval",
                type: "uint256"
            }
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                "components": [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string"
                    },
                    {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8"
                    },
                    {
                        internalType: "uint256",
                        name: "totalSupply",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "fixedCapETH",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForAirdrop",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForFarm",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForSale",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenForAddLP",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "tokenPerPurchase",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxRepeatPurchase",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "minDurationSell",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxDurationSell",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "metadata",
                        type: "string"
                    },
                    {
                        internalType: "uint256",
                        name: "numberBatch",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxAmountETH",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address"
                    }
                ],
                internalType: "struct RocketBera.LaunchPoolParams",
                name: "params",
                type: "tuple"
            }
        ],
        name: "launchPool",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "ownerToken",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "userAddress",
                type: "address"
            }
        ],
        name: "pendingClaimAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "userAddress",
                type: "address"
            }
        ],
        name: "pendingReferrerReward",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "userAddress",
                type: "address"
            }
        ],
        name: "pendingRewardFarming",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "poolInfos",
        outputs: [
            {
                internalType: "uint256",
                name: "fixedCapETH",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalSupplyToken",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "tokenForAirdrop",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "tokenForFarm",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "tokenForSale",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "tokenForAddLP",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "metadata",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "pools",
        outputs: [
            {
                internalType: "uint256",
                name: "tokenPerPurchase",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "maxRepeatPurchase",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalBatch",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startTime",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "endTime",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "minDurationSell",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "maxDurationSell",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "raisedInETH",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "soldBatch",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveETH",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveBatch",
                type: "uint256"
            },
            {
                internalType: "enum RocketBera.StatusPool",
                name: "status",
                type: "uint8"
            },
            {
                internalType: "uint256",
                name: "totalReferrerBond",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalBatchAvailable",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }
        ],
        name: "refundETHToUsers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "rocketTokenFactory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "poolAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "batchNumber",
                type: "uint256"
            }
        ],
        name: "sell",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_rocketTokenFactory",
                type: "address"
            }
        ],
        name: "setRocketTokenFactory",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }
        ],
        name: "transferTokenUsers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "users",
        outputs: [
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "balanceSold",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "ethBought",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "rewardFarm",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "isClaimed",
                type: "bool"
            },
            {
                internalType: "uint256",
                name: "rewardDebt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "tokenClaimed",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "isClaimedFarm",
                type: "bool"
            },
            {
                internalType: "uint256",
                name: "referrerReward",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "referrerBond",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "vesting",
        outputs: [
            {
                internalType: "uint256",
                name: "startTime",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "isExist",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    }
]