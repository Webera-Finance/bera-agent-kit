export declare const KodiakSwapRouter02ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_factoryV2";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "factoryV3";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_positionManager";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_WETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "WETH9";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "approveMax";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "approveMaxMinusOne";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "approveZeroThenMax";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "approveZeroThenMaxMinusOne";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "callPositionManager";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "result";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "paths";
        readonly type: "bytes[]";
    }, {
        readonly internalType: "uint128[]";
        readonly name: "amounts";
        readonly type: "uint128[]";
    }, {
        readonly internalType: "uint24";
        readonly name: "maximumTickDivergence";
        readonly type: "uint24";
    }, {
        readonly internalType: "uint32";
        readonly name: "secondsAgo";
        readonly type: "uint32";
    }];
    readonly name: "checkOracleSlippage";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "path";
        readonly type: "bytes";
    }, {
        readonly internalType: "uint24";
        readonly name: "maximumTickDivergence";
        readonly type: "uint24";
    }, {
        readonly internalType: "uint32";
        readonly name: "secondsAgo";
        readonly type: "uint32";
    }];
    readonly name: "checkOracleSlippage";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "path";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMinimum";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IV3SwapRouter.ExactInputParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "exactInput";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMinimum";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint160";
            readonly name: "sqrtPriceLimitX96";
            readonly type: "uint160";
        }];
        readonly internalType: "struct IV3SwapRouter.ExactInputSingleParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "exactInputSingle";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "path";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountInMaximum";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IV3SwapRouter.ExactOutputParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "exactOutput";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountInMaximum";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint160";
            readonly name: "sqrtPriceLimitX96";
            readonly type: "uint160";
        }];
        readonly internalType: "struct IV3SwapRouter.ExactOutputSingleParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "exactOutputSingle";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factoryV2";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "getApprovalType";
    readonly outputs: readonly [{
        readonly internalType: "enum IApproveAndCall.ApprovalType";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token1";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Min";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IApproveAndCall.IncreaseLiquidityParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "increaseLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "result";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token1";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickLower";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickUpper";
            readonly type: "int24";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1Min";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly internalType: "struct IApproveAndCall.MintParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "result";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "previousBlockhash";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "positionManager";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "pull";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "refundETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "selfPermit";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "expiry";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "selfPermitAllowed";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "expiry";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "selfPermitAllowedIfNecessary";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "selfPermitIfNecessary";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "swapExactTokensForTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountInMax";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "swapTokensForExactTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }];
    readonly name: "sweepToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }];
    readonly name: "sweepToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "feeBips";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "feeRecipient";
        readonly type: "address";
    }];
    readonly name: "sweepTokenWithFee";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "feeBips";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "feeRecipient";
        readonly type: "address";
    }];
    readonly name: "sweepTokenWithFee";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int256";
        readonly name: "amount0Delta";
        readonly type: "int256";
    }, {
        readonly internalType: "int256";
        readonly name: "amount1Delta";
        readonly type: "int256";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "uniswapV3SwapCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }];
    readonly name: "unwrapWETH9";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }];
    readonly name: "unwrapWETH9";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "feeBips";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "feeRecipient";
        readonly type: "address";
    }];
    readonly name: "unwrapWETH9WithFee";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountMinimum";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "feeBips";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "feeRecipient";
        readonly type: "address";
    }];
    readonly name: "unwrapWETH9WithFee";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "wrapETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
export declare const KodiakUniswapV2Router02ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_factory";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_WETH";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "WETH";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "tokenA";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "tokenB";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountADesired";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountBDesired";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountAMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountBMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "addLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountA";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountB";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountTokenDesired";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountTokenMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETHMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "addLiquidityETH";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETH";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "reserveIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "reserveOut";
        readonly type: "uint256";
    }];
    readonly name: "getAmountIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "reserveIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "reserveOut";
        readonly type: "uint256";
    }];
    readonly name: "getAmountOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }];
    readonly name: "getAmountsIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }];
    readonly name: "getAmountsOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountA";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "reserveA";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "reserveB";
        readonly type: "uint256";
    }];
    readonly name: "quote";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountB";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "tokenA";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "tokenB";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountAMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountBMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "removeLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountA";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountB";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountTokenMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETHMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "removeLiquidityETH";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETH";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountTokenMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETHMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "removeLiquidityETHSupportingFeeOnTransferTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountETH";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountTokenMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETHMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "approveMax";
        readonly type: "bool";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "removeLiquidityETHWithPermit";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETH";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountTokenMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountETHMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "approveMax";
        readonly type: "bool";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountETH";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "tokenA";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "tokenB";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "liquidity";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountAMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountBMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "approveMax";
        readonly type: "bool";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "removeLiquidityWithPermit";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountA";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountB";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapETHForExactTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapExactETHForTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapExactETHForTokensSupportingFeeOnTransferTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapExactTokensForETH";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapExactTokensForETHSupportingFeeOnTransferTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapExactTokensForTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapExactTokensForTokensSupportingFeeOnTransferTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountInMax";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapTokensForExactETH";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountInMax";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "path";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swapTokensForExactTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
//# sourceMappingURL=kodiakABI.d.ts.map