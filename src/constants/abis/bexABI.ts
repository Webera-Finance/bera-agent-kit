export const BeraCrocMultiSwapABI = [
  {
    inputs: [
      {
        components: [
          { internalType: 'bytes32', name: 'poolId', type: 'bytes32' },
          { internalType: 'enum IVault.SwapKind', name: 'kind', type: 'uint8' },
          { internalType: 'contract IAsset', name: 'assetIn', type: 'address' },
          {
            internalType: 'contract IAsset',
            name: 'assetOut',
            type: 'address',
          },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'bytes', name: 'userData', type: 'bytes' },
        ],
        internalType: 'struct IVault.SingleSwap',
        name: 'singleSwap',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'bool', name: 'fromInternalBalance', type: 'bool' },
          {
            internalType: 'address payable',
            name: 'recipient',
            type: 'address',
          },
          { internalType: 'bool', name: 'toInternalBalance', type: 'bool' },
        ],
        internalType: 'struct IVault.FundManagement',
        name: 'funds',
        type: 'tuple',
      },
      { internalType: 'uint256', name: 'limit', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
    ],
    name: 'swap',
    outputs: [
      { internalType: 'uint256', name: 'amountCalculated', type: 'uint256' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;
