export declare const BEND_ABI: readonly [{
    readonly type: "function";
    readonly name: "supply";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "withdraw";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "borrow";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "interestRateMode";
        readonly type: "uint256";
        readonly internaltype: "uint256";
    }, {
        readonly name: "refferalCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "repay";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "rateMode";
        readonly type: "uint256";
        readonly internaltype: "uint256";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
//# sourceMappingURL=bendABI.d.ts.map