const weberaAbi = [
  {
    type: 'function',
    name: 'deposit',
    inputs: [
      { name: 'amount_', type: 'uint256', internalType: 'uint256' },
      { name: 'vault_', type: 'address', internalType: 'address' },
      { name: 'fromAsset_', type: 'address', internalType: 'address' },
    ],
    outputs: [{ name: 'shares', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'getMaxWithdrawal',
    inputs: [
      { name: 'vault_', type: 'address', internalType: 'address' },
      { name: 'user_', type: 'address', internalType: 'address' },
      { name: 'asset_', type: 'address', internalType: 'address' },
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'withdraw',
    inputs: [
      { name: 'toAssetAmount_', type: 'uint256', internalType: 'uint256' },
      { name: 'vault_', type: 'address', internalType: 'address' },
      { name: 'toAsset_', type: 'address', internalType: 'address' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;
export default weberaAbi;
