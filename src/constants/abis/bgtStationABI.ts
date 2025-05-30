export const BerachainRewardsVaultABI = [
  {
    type: 'function',
    name: 'addIncentive',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'incentiveRate',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'delegateStake',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'delegateWithdraw',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'distributor',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'earned',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'exit',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getDelegateStake',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'delegate',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getReward',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getRewardForDuration',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTotalDelegateStaked',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getWhitelistedTokens',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getWhitelistedTokensCount',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        name: '_berachef',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_bgt',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_distributor',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_stakingToken',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'lastTimeRewardApplicable',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'notifyRewardAmount',
    inputs: [
      {
        name: 'coinbase',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'reward',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'operator',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'pause',
    inputs: [
      {
        name: '_paused',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'recoverERC20',
    inputs: [
      {
        name: 'tokenAddress',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenAmount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'removeIncentiveToken',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'rewardPerToken',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'setDistributor',
    inputs: [
      {
        name: '_rewardDistribution',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setMaxIncentiveTokensCount',
    inputs: [
      {
        name: '_maxIncentiveTokensCount',
        type: 'uint8',
        internalType: 'uint8',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setOperator',
    inputs: [
      {
        name: '_operator',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setRewardsDuration',
    inputs: [
      {
        name: '_rewardsDuration',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'stake',
    inputs: [
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'whitelistIncentiveToken',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'minIncentiveRate',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'withdraw',
    inputs: [
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'DelegateStaked',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'delegate',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'DelegateWithdrawn',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'delegate',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'DistributorSet',
    inputs: [
      {
        name: 'distributor',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'IncentiveAdded',
    inputs: [
      {
        name: 'token',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'incentiveRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'IncentiveTokenRemoved',
    inputs: [
      {
        name: 'token',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'IncentiveTokenWhitelisted',
    inputs: [
      {
        name: 'token',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'minIncentiveRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'IncentivesProcessed',
    inputs: [
      {
        name: 'coinbase',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'token',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'bgtEmitted',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'MaxIncentiveTokensCountUpdated',
    inputs: [
      {
        name: 'maxIncentiveTokensCount',
        type: 'uint8',
        indexed: false,
        internalType: 'uint8',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OperatorSet',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'operator',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Recovered',
    inputs: [
      {
        name: 'token',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardAdded',
    inputs: [
      {
        name: 'reward',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardPaid',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'reward',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardsDurationUpdated',
    inputs: [
      {
        name: 'newDuration',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Staked',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdrawn',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AlreadyInitialized',
    inputs: [],
  },
  {
    type: 'error',
    name: 'AmountLessThanMinIncentiveRate',
    inputs: [],
  },
  {
    type: 'error',
    name: 'BlockDoesNotExist',
    inputs: [],
  },
  {
    type: 'error',
    name: 'BlockNotInBuffer',
    inputs: [],
  },
  {
    type: 'error',
    name: 'CannotRecoverRewardToken',
    inputs: [],
  },
  {
    type: 'error',
    name: 'CannotRecoverStakingToken',
    inputs: [],
  },
  {
    type: 'error',
    name: 'DelegateStakedOverflow',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InsolventReward',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InsufficientDelegateStake',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InsufficientSelfStake',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InsufficientStake',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidCommission',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidCuttingBoardWeights',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidMaxIncentiveTokensCount',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidMinter',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidStartBlock',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvariantCheckFailed',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MaxNumWeightsPerCuttingBoardIsZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NoWhitelistedTokens',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotActionableBlock',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotApprovedSender',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotBGT',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotBlockRewardController',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotDelegate',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotDistributor',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotEnoughBalance',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotEnoughTime',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotFeeCollector',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotFriendOfTheChef',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotGovernance',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotOperator',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotProver',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotRootFollower',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotValidatorOrOperator',
    inputs: [],
  },
  {
    type: 'error',
    name: 'PayoutAmountIsZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'PayoutTokenIsZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'QueuedCuttingBoardNotFound',
    inputs: [],
  },
  {
    type: 'error',
    name: 'QueuedCuttingBoardNotReady',
    inputs: [],
  },
  {
    type: 'error',
    name: 'RewardCycleNotEnded',
    inputs: [],
  },
  {
    type: 'error',
    name: 'RewardCycleStarted',
    inputs: [],
  },
  {
    type: 'error',
    name: 'StakeAmountIsZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TokenAlreadyWhitelistedOrLimitReached',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TokenNotWhitelisted',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TooManyWeights',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TotalSupplyOverflow',
    inputs: [],
  },
  {
    type: 'error',
    name: 'Unauthorized',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'VaultAlreadyExists',
    inputs: [],
  },
  {
    type: 'error',
    name: 'WithdrawAmountIsZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ZeroAddress',
    inputs: [],
  },
] as const;
