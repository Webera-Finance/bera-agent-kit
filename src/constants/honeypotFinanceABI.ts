/**
 * LaunchPad
 */
export const pot2pumpFacadeABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_factory",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_pairImpl",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimLP",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimableLP",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deposit",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "raisedTokenAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "factory",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPair",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "pair",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPairState",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "state",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPairTokenDeployer",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "tokenDeployer",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "multiClaimLP",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "launchedTokens",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "multiRefundRaisedToken",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "launchedTokens",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "pairImpl",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressInsufficientBalance",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "FactoryAddressIsZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidRaisedTokenAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PairImplementationIsZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ]
    }
] as const;

export const pot2pumpFactoryABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "params",
                "type": "tuple",
                "internalType": "struct Pot2PumpFactory.Pot2PumpFactoryParams",
                "components": [
                    {
                        "name": "base",
                        "type": "tuple",
                        "internalType": "struct BaseFactory.BaseParams",
                        "components": [
                            {
                                "name": "vaultFactory",
                                "type": "address",
                                "internalType": "address"
                            },
                            {
                                "name": "launchedTokenImpl",
                                "type": "address",
                                "internalType": "address"
                            },
                            {
                                "name": "pairImpl",
                                "type": "address",
                                "internalType": "address"
                            }
                        ]
                    },
                    {
                        "name": "launchCycle",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tokenTo",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "feeVaults",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "initialAdmin",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "initialDelay",
                        "type": "uint48",
                        "internalType": "uint48"
                    }
                ]
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "LAUNCHED_TOKEN_DECIMALS",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "OPERATOR_ROLE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "acceptDefaultAdminTransfer",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addEvent",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addRaisedToken",
        "inputs": [
            {
                "name": "_raisedToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_minCap",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "allPairsLength",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "allocation",
        "inputs": [],
        "outputs": [
            {
                "name": "participantAllocation",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "burnAllocation",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "honeypotFee",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "tokenDeployer",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "beginDefaultAdminTransfer",
        "inputs": [
            {
                "name": "newAdmin",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "cancelDefaultAdminTransfer",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "changeDefaultAdminDelay",
        "inputs": [
            {
                "name": "newDelay",
                "type": "uint48",
                "internalType": "uint48"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "cooldownDuration",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "createPair",
        "inputs": [
            {
                "name": "params",
                "type": "tuple",
                "internalType": "struct IPot2PumpFactory.CreatePairParams",
                "components": [
                    {
                        "name": "raisedToken",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "name",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "swapHandler",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "pair",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "defaultAdmin",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "defaultAdminDelay",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint48",
                "internalType": "uint48"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "defaultAdminDelayIncreaseWait",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint48",
                "internalType": "uint48"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "events",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "feeVaults",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getLaunchedTokenImplementation",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPair",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPair",
        "inputs": [
            {
                "name": "index",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPairImplementation",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getVaultFactory",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getWithdrawableRaisedAmount",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "grantRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "hasRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isAllowedRaisedToken",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "launchCycle",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "memeTokenSupply",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "pendingDefaultAdmin",
        "inputs": [],
        "outputs": [
            {
                "name": "newAdmin",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "schedule",
                "type": "uint48",
                "internalType": "uint48"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "pendingDefaultAdminDelay",
        "inputs": [],
        "outputs": [
            {
                "name": "newDelay",
                "type": "uint48",
                "internalType": "uint48"
            },
            {
                "name": "schedule",
                "type": "uint48",
                "internalType": "uint48"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "raisedTokenMinCaps",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "removeEvent",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "removeRaisedToken",
        "inputs": [
            {
                "name": "_raisedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "revokeRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "rollbackDefaultAdminDelay",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setCooldownDuration",
        "inputs": [
            {
                "name": "_cooldownDuration",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setLaunchCycle",
        "inputs": [
            {
                "name": "_launchCycle",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setMemeTokenSupply",
        "inputs": [
            {
                "name": "_memeTokenSupply",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setTokenTo",
        "inputs": [
            {
                "name": "_tokenTo",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "tokenTo",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "updateAllocation",
        "inputs": [
            {
                "name": "newAllocation",
                "type": "tuple",
                "internalType": "struct IPot2PumpFactory.LPAllocation",
                "components": [
                    {
                        "name": "participantAllocation",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "burnAllocation",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "honeypotFee",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "tokenDeployer",
                        "type": "uint16",
                        "internalType": "uint16"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "updateFeeVaults",
        "inputs": [
            {
                "name": "newFeeVaults",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "withdrawRaisedToken",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "DefaultAdminDelayChangeCanceled",
        "inputs": [],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DefaultAdminDelayChangeScheduled",
        "inputs": [
            {
                "name": "newDelay",
                "type": "uint48",
                "indexed": false,
                "internalType": "uint48"
            },
            {
                "name": "effectSchedule",
                "type": "uint48",
                "indexed": false,
                "internalType": "uint48"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DefaultAdminTransferCanceled",
        "inputs": [],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DefaultAdminTransferScheduled",
        "inputs": [
            {
                "name": "newAdmin",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "acceptSchedule",
                "type": "uint48",
                "indexed": false,
                "internalType": "uint48"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "EventAdded",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "pair",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "EventRemoved",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "pair",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "PairCreated",
        "inputs": [
            {
                "name": "raisedToken",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "launchedToken",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "pair",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "previousAdminRole",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "newAdminRole",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RoleGranted",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RoleRevoked",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AccessControlBadConfirmation",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AccessControlEnforcedDefaultAdminDelay",
        "inputs": [
            {
                "name": "schedule",
                "type": "uint48",
                "internalType": "uint48"
            }
        ]
    },
    {
        "type": "error",
        "name": "AccessControlEnforcedDefaultAdminRules",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AccessControlInvalidDefaultAdmin",
        "inputs": [
            {
                "name": "defaultAdmin",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AccessControlUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "neededRole",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressInsufficientBalance",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "CreatePairFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC1167FailedCreateClone",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IdenticalAddress",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAllocationSum",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidLaunchCycle",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalideTiers",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MemeTokenSupplyCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotAllowedRaisedToken",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotEligibleForWithdraw",
        "inputs": [
            {
                "name": "memePair",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "PairExists",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "PairIsInvalid",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RaisedTokenMinCapCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SafeCastOverflowedUintDowncast",
        "inputs": [
            {
                "name": "bits",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ]
    }
] as const;

export const pot2pumpPairABI = [
    {
        "type": "function",
        "name": "MAX_BASIS_POINTS",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "PairState",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "enum IBasePair.Status"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "allocation",
        "inputs": [],
        "outputs": [
            {
                "name": "participantAllocation",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "tokenDeployer",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "honeypotFee",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "burnAllocation",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "claimLP",
        "inputs": [
            {
                "name": "claimer",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimableLP",
        "inputs": [
            {
                "name": "claimer",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "claimedLp",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "depositRaisedToken",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "depositedLaunchedToken",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "depositedRaisedToken",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "dexPool",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "dexRouter",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "endTime",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "factory",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "finalizePairCompletion",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "initialize",
        "inputs": [
            {
                "name": "_tokenDeployer",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_raisedToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_launchedToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_dexRouter",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_launchCycle",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_raisedTokenMinCap",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_allocation",
                "type": "tuple",
                "internalType": "struct IPot2PumpFactory.LPAllocation",
                "components": [
                    {
                        "name": "participantAllocation",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "burnAllocation",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "honeypotFee",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "tokenDeployer",
                        "type": "uint16",
                        "internalType": "uint16"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "isCycleEnded",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "launchedToken",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "lpToken",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "onERC721Received",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "raisedToken",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "raisedTokenDeposit",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "raisedTokenMinCap",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "refundRaisedToken",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "tokenDeployer",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "ClaimLP",
        "inputs": [
            {
                "name": "claimer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DepositRaisedToken",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "depositAmount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "PairCompletionStarted",
        "inputs": [],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Perform",
        "inputs": [
            {
                "name": "pairState",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum IBasePair.Status"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Refund",
        "inputs": [
            {
                "name": "depositor",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "refundAmount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressInsufficientBalance",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IdenticalAddress",
        "inputs": [
            {
                "name": "launchedToken",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LaunchCycleHasEnded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MathOverflowedMulDiv",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoClaimAmountRemaining",
        "inputs": [
            {
                "name": "lpAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "claimedAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotDepositedRaisedToken",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotEligibleForClaim",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PairStatusError",
        "inputs": [
            {
                "name": "code",
                "type": "uint8",
                "internalType": "enum BasePair.PairErrorCode"
            }
        ]
    },
    {
        "type": "error",
        "name": "ReentrancyGuardReentrantCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "SqrtRatioX96Overflow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TokenAddressIsZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": [
            {
                "name": "caller",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "priceOutOfRange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "tickOutOfRange",
        "inputs": []
    }
] as const;


/**
 * Dex
 */

