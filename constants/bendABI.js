"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BEND_ABI = void 0;
exports.BEND_ABI = [
    {
        type: 'function',
        name: 'supply',
        inputs: [
            {
                name: 'asset',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'onBehalfOf',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'referralCode',
                type: 'uint16',
                internalType: 'uint16',
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
                name: 'asset',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'onBehalfOf',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'borrow',
        inputs: [
            {
                name: 'asset',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'interestRateMode',
                type: 'uint256',
                internaltype: 'uint256',
            },
            {
                name: 'refferalCode',
                type: 'uint16',
                internalType: 'uint16',
            },
            {
                name: 'onBehalfOf',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'repay',
        inputs: [
            {
                name: 'asset',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'rateMode',
                type: 'uint256',
                internaltype: 'uint256',
            },
            {
                name: 'onBehalfOf',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
//# sourceMappingURL=bendABI.js.map