"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BGTABI = exports.TokenABI = void 0;
exports.TokenABI = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_spender',
                type: 'address',
            },
            {
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_from',
                type: 'address',
            },
            {
                name: '_to',
                type: 'address',
            },
            {
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: '_owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                name: 'balance',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_to',
                type: 'address',
            },
            {
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: '_owner',
                type: 'address',
            },
            {
                name: '_spender',
                type: 'address',
            },
        ],
        name: 'allowance',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        payable: true,
        stateMutability: 'payable',
        type: 'fallback',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
];
exports.BGTABI = [
    {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
    },
    {
        inputs: [],
        name: 'AmountLessThanMinIncentiveRate',
        type: 'error',
    },
    {
        inputs: [],
        name: 'BlockDoesNotExist',
        type: 'error',
    },
    {
        inputs: [],
        name: 'BlockNotInBuffer',
        type: 'error',
    },
    {
        inputs: [],
        name: 'CannotRecoverRewardToken',
        type: 'error',
    },
    {
        inputs: [],
        name: 'CannotRecoverStakingToken',
        type: 'error',
    },
    {
        inputs: [],
        name: 'CheckpointUnorderedInsertion',
        type: 'error',
    },
    {
        inputs: [],
        name: 'DelegateStakedOverflow',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ECDSAInvalidSignature',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'length',
                type: 'uint256',
            },
        ],
        name: 'ECDSAInvalidSignatureLength',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 's',
                type: 'bytes32',
            },
        ],
        name: 'ECDSAInvalidSignatureS',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'increasedSupply',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'cap',
                type: 'uint256',
            },
        ],
        name: 'ERC20ExceededSafeSupply',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'allowance',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'needed',
                type: 'uint256',
            },
        ],
        name: 'ERC20InsufficientAllowance',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'needed',
                type: 'uint256',
            },
        ],
        name: 'ERC20InsufficientBalance',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'approver',
                type: 'address',
            },
        ],
        name: 'ERC20InvalidApprover',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'receiver',
                type: 'address',
            },
        ],
        name: 'ERC20InvalidReceiver',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'ERC20InvalidSender',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
        ],
        name: 'ERC20InvalidSpender',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'timepoint',
                type: 'uint256',
            },
            {
                internalType: 'uint48',
                name: 'clock',
                type: 'uint48',
            },
        ],
        name: 'ERC5805FutureLookup',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ERC6372InconsistentClock',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InsolventReward',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InsufficientDelegateStake',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InsufficientSelfStake',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InsufficientStake',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'currentNonce',
                type: 'uint256',
            },
        ],
        name: 'InvalidAccountNonce',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidCommission',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidCuttingBoardWeights',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidInitialization',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidMaxIncentiveTokensCount',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidMinter',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidStartBlock',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvariantCheckFailed',
        type: 'error',
    },
    {
        inputs: [],
        name: 'MaxNumWeightsPerCuttingBoardIsZero',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NoWhitelistedTokens',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotActionableBlock',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotApprovedSender',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotBGT',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotBlockRewardController',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotDelegate',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotDistributor',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotEnoughBalance',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotEnoughTime',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotFeeCollector',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotFriendOfTheChef',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotGovernance',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotInitializing',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotOperator',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotProver',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotRootFollower',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotValidatorOrOperator',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'OwnableInvalidOwner',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
    },
    {
        inputs: [],
        name: 'PayoutAmountIsZero',
        type: 'error',
    },
    {
        inputs: [],
        name: 'PayoutTokenIsZero',
        type: 'error',
    },
    {
        inputs: [],
        name: 'QueuedCuttingBoardNotFound',
        type: 'error',
    },
    {
        inputs: [],
        name: 'QueuedCuttingBoardNotReady',
        type: 'error',
    },
    {
        inputs: [],
        name: 'RewardCycleNotEnded',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint8',
                name: 'bits',
                type: 'uint8',
            },
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'SafeCastOverflowedUintDowncast',
        type: 'error',
    },
    {
        inputs: [],
        name: 'StakeAmountIsZero',
        type: 'error',
    },
    {
        inputs: [],
        name: 'TokenAlreadyWhitelistedOrLimitReached',
        type: 'error',
    },
    {
        inputs: [],
        name: 'TokenNotWhitelisted',
        type: 'error',
    },
    {
        inputs: [],
        name: 'TooManyWeights',
        type: 'error',
    },
    {
        inputs: [],
        name: 'TotalSupplyOverflow',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'Unauthorized',
        type: 'error',
    },
    {
        inputs: [],
        name: 'VaultAlreadyExists',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'expiry',
                type: 'uint256',
            },
        ],
        name: 'VotesExpiredSignature',
        type: 'error',
    },
    {
        inputs: [],
        name: 'WithdrawAmountIsZero',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint128',
                name: 'amount',
                type: 'uint128',
            },
        ],
        name: 'ActivateBoost',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previous',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'current',
                type: 'address',
            },
        ],
        name: 'BeraChefChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint128',
                name: 'amount',
                type: 'uint128',
            },
        ],
        name: 'CancelBoost',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'delegator',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'fromDelegate',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'toDelegate',
                type: 'address',
            },
        ],
        name: 'DelegateChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'delegate',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'previousVotes',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newVotes',
                type: 'uint256',
            },
        ],
        name: 'DelegateVotesChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint128',
                name: 'amount',
                type: 'uint128',
            },
        ],
        name: 'DropBoost',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint64',
                name: 'version',
                type: 'uint64',
            },
        ],
        name: 'Initialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previous',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'current',
                type: 'address',
            },
        ],
        name: 'MinterChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint128',
                name: 'amount',
                type: 'uint128',
            },
        ],
        name: 'QueueBoost',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'receiver',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'Redeem',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'SenderWhitelisted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'oldRate',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newRate',
                type: 'uint256',
            },
        ],
        name: 'UpdateCommission',
        type: 'event',
    },
    {
        inputs: [],
        name: 'CLOCK_MODE',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
        ],
        name: 'activateBoost',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
        ],
        name: 'allowance',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'beraChef',
        outputs: [
            {
                internalType: 'contract IBeraChef',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
        ],
        name: 'boosted',
        outputs: [
            {
                internalType: 'uint128',
                name: '',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
        ],
        name: 'boostedQueue',
        outputs: [
            {
                internalType: 'uint32',
                name: 'blockNumberLast',
                type: 'uint32',
            },
            {
                internalType: 'uint128',
                name: 'balance',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'rewardRate',
                type: 'uint256',
            },
        ],
        name: 'boostedRewardRate',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
        ],
        name: 'boostees',
        outputs: [
            {
                internalType: 'uint128',
                name: '',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'boosts',
        outputs: [
            {
                internalType: 'uint128',
                name: '',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                internalType: 'uint128',
                name: 'amount',
                type: 'uint128',
            },
        ],
        name: 'cancelBoost',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                internalType: 'uint32',
                name: 'pos',
                type: 'uint32',
            },
        ],
        name: 'checkpoints',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint48',
                        name: '_key',
                        type: 'uint48',
                    },
                    {
                        internalType: 'uint208',
                        name: '_value',
                        type: 'uint208',
                    },
                ],
                internalType: 'struct Checkpoints.Checkpoint208',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'clock',
        outputs: [
            {
                internalType: 'uint48',
                name: '',
                type: 'uint48',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'rewardRate',
                type: 'uint256',
            },
        ],
        name: 'commissionRewardRate',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
        ],
        name: 'commissions',
        outputs: [
            {
                internalType: 'uint32',
                name: 'blockNumberLast',
                type: 'uint32',
            },
            {
                internalType: 'uint224',
                name: 'rate',
                type: 'uint224',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [
            {
                internalType: 'uint8',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'delegatee',
                type: 'address',
            },
        ],
        name: 'delegate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'delegatee',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'expiry',
                type: 'uint256',
            },
            {
                internalType: 'uint8',
                name: 'v',
                type: 'uint8',
            },
            {
                internalType: 'bytes32',
                name: 'r',
                type: 'bytes32',
            },
            {
                internalType: 'bytes32',
                name: 's',
                type: 'bytes32',
            },
        ],
        name: 'delegateBySig',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'delegates',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                internalType: 'uint128',
                name: 'amount',
                type: 'uint128',
            },
        ],
        name: 'dropBoost',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                internalType: 'bytes1',
                name: 'fields',
                type: 'bytes1',
            },
            {
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'version',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'verifyingContract',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32',
            },
            {
                internalType: 'uint256[]',
                name: 'extensions',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'timepoint',
                type: 'uint256',
            },
        ],
        name: 'getPastTotalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'timepoint',
                type: 'uint256',
            },
        ],
        name: 'getPastVotes',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'getVotes',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'isWhitelistedSender',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'distributor',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'minter',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'nonces',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'numCheckpoints',
        outputs: [
            {
                internalType: 'uint32',
                name: '',
                type: 'uint32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                internalType: 'uint128',
                name: 'amount',
                type: 'uint128',
            },
        ],
        name: 'queueBoost',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'queuedBoost',
        outputs: [
            {
                internalType: 'uint128',
                name: '',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'receiver',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'redeem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_beraChef',
                type: 'address',
            },
        ],
        name: 'setBeraChef',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'rate',
                type: 'uint256',
            },
        ],
        name: 'setCommission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_minter',
                type: 'address',
            },
        ],
        name: 'setMinter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_staker',
                type: 'address',
            },
        ],
        name: 'setStaker',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'staker',
        outputs: [
            {
                internalType: 'contract BGTStaker',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalBoosts',
        outputs: [
            {
                internalType: 'uint128',
                name: '',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'unboostedBalanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'whitelistSender',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
//# sourceMappingURL=tokenABI.js.map