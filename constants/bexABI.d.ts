export declare const BeraCrocMultiSwapABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_crocSwapDex";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_crocImpact";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_crocQuery";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "crocSwapDex";
    readonly outputs: readonly [{
        readonly internalType: "contract CrocSwapDex";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "poolIdx";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "base";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "quote";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isBuy";
            readonly type: "bool";
        }];
        readonly internalType: "struct SwapHelpers.SwapStep[]";
        readonly name: "_steps";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint128";
        readonly name: "_amount";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "_minOut";
        readonly type: "uint128";
    }];
    readonly name: "multiSwap";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "out";
        readonly type: "uint128";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "poolIdx";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "base";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "quote";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isBuy";
            readonly type: "bool";
        }];
        readonly internalType: "struct SwapHelpers.SwapStep[]";
        readonly name: "_steps";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint128";
        readonly name: "_amount";
        readonly type: "uint128";
    }];
    readonly name: "previewMultiSwap";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "out";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint256";
        readonly name: "predictedQty";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "retire";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
//# sourceMappingURL=bexABI.d.ts.map