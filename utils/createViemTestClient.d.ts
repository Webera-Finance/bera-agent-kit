export declare function createViemTestClient(mode: 'anvil' | 'hardhat'): {
    mode: "anvil" | "hardhat";
    account: undefined;
    batch?: {
        multicall?: boolean | import("viem").Prettify<import("viem").MulticallBatchOptions> | undefined;
    } | undefined;
    cacheTime: number;
    ccipRead?: false | {
        request?: (parameters: import("viem").CcipRequestParameters) => Promise<import("viem/_types/utils/ccip").CcipRequestReturnType>;
    } | undefined;
    chain: {
        blockExplorers?: {
            [key: string]: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
            default: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
        } | undefined;
        contracts?: import("viem").Prettify<{
            [key: string]: import("viem").ChainContract | {
                [sourceId: number]: import("viem").ChainContract | undefined;
            } | undefined;
        } & {
            ensRegistry?: import("viem").ChainContract | undefined;
            ensUniversalResolver?: import("viem").ChainContract | undefined;
            multicall3?: import("viem").ChainContract | undefined;
            universalSignatureVerifier?: import("viem").ChainContract | undefined;
        }> | undefined;
        id: 31337;
        name: "Foundry";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "Ether";
            readonly symbol: "ETH";
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["http://127.0.0.1:8545"];
                readonly webSocket: readonly ["ws://127.0.0.1:8545"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    };
    key: string;
    name: string;
    pollingInterval: number;
    request: import("viem").EIP1193RequestFn<import("viem").TestRpcSchema<"anvil" | "hardhat">>;
    transport: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn> & {
        fetchOptions?: import("viem").HttpTransportConfig["fetchOptions"] | undefined;
        url?: string | undefined;
    };
    type: string;
    uid: string;
    dropTransaction: (args: import("viem").DropTransactionParameters) => Promise<void>;
    dumpState: () => Promise<import("viem").DumpStateReturnType>;
    getAutomine: () => Promise<import("viem").GetAutomineReturnType>;
    getTxpoolContent: () => Promise<import("viem").GetTxpoolContentReturnType>;
    getTxpoolStatus: () => Promise<import("viem").GetTxpoolStatusReturnType>;
    impersonateAccount: (args: import("viem").ImpersonateAccountParameters) => Promise<void>;
    increaseTime: (args: import("viem").IncreaseTimeParameters) => Promise<import("viem").Quantity>;
    inspectTxpool: () => Promise<import("viem").InspectTxpoolReturnType>;
    loadState: (args: import("viem").LoadStateParameters) => Promise<import("viem").LoadStateReturnType>;
    mine: (args: import("viem").MineParameters) => Promise<void>;
    removeBlockTimestampInterval: () => Promise<void>;
    reset: (args?: import("viem").ResetParameters | undefined) => Promise<void>;
    revert: (args: import("viem").RevertParameters) => Promise<void>;
    sendUnsignedTransaction: <chain extends import("viem").Chain | undefined>(args: import("viem").SendUnsignedTransactionParameters<chain>) => Promise<import("viem").SendUnsignedTransactionReturnType>;
    setAutomine: (args: boolean) => Promise<void>;
    setBalance: (args: import("viem").SetBalanceParameters) => Promise<void>;
    setBlockGasLimit: (args: import("viem").SetBlockGasLimitParameters) => Promise<void>;
    setBlockTimestampInterval: (args: import("viem").SetBlockTimestampIntervalParameters) => Promise<void>;
    setCode: (args: import("viem").SetCodeParameters) => Promise<void>;
    setCoinbase: (args: import("viem").SetCoinbaseParameters) => Promise<void>;
    setIntervalMining: (args: import("viem").SetIntervalMiningParameters) => Promise<void>;
    setLoggingEnabled: (args: boolean) => Promise<void>;
    setMinGasPrice: (args: import("viem").SetMinGasPriceParameters) => Promise<void>;
    setNextBlockBaseFeePerGas: (args: import("viem").SetNextBlockBaseFeePerGasParameters) => Promise<void>;
    setNextBlockTimestamp: (args: import("viem").SetNextBlockTimestampParameters) => Promise<void>;
    setNonce: (args: import("viem").SetNonceParameters) => Promise<void>;
    setRpcUrl: (args: string) => Promise<void>;
    setStorageAt: (args: import("viem").SetStorageAtParameters) => Promise<void>;
    snapshot: () => Promise<import("viem").Quantity>;
    stopImpersonatingAccount: (args: import("viem").StopImpersonatingAccountParameters) => Promise<void>;
    extend: <const client extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").HttpTransport, {
        blockExplorers?: {
            [key: string]: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
            default: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
        } | undefined;
        contracts?: import("viem").Prettify<{
            [key: string]: import("viem").ChainContract | {
                [sourceId: number]: import("viem").ChainContract | undefined;
            } | undefined;
        } & {
            ensRegistry?: import("viem").ChainContract | undefined;
            ensUniversalResolver?: import("viem").ChainContract | undefined;
            multicall3?: import("viem").ChainContract | undefined;
            universalSignatureVerifier?: import("viem").ChainContract | undefined;
        }> | undefined;
        id: 31337;
        name: "Foundry";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "Ether";
            readonly symbol: "ETH";
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["http://127.0.0.1:8545"];
                readonly webSocket: readonly ["ws://127.0.0.1:8545"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<{
        blockExplorers?: {
            [key: string]: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
            default: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
        } | undefined;
        contracts?: import("viem").Prettify<{
            [key: string]: import("viem").ChainContract | {
                [sourceId: number]: import("viem").ChainContract | undefined;
            } | undefined;
        } & {
            ensRegistry?: import("viem").ChainContract | undefined;
            ensUniversalResolver?: import("viem").ChainContract | undefined;
            multicall3?: import("viem").ChainContract | undefined;
            universalSignatureVerifier?: import("viem").ChainContract | undefined;
        }> | undefined;
        id: 31337;
        name: "Foundry";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "Ether";
            readonly symbol: "ETH";
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["http://127.0.0.1:8545"];
                readonly webSocket: readonly ["ws://127.0.0.1:8545"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").HttpTransport, {
        blockExplorers?: {
            [key: string]: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
            default: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
        } | undefined;
        contracts?: import("viem").Prettify<{
            [key: string]: import("viem").ChainContract | {
                [sourceId: number]: import("viem").ChainContract | undefined;
            } | undefined;
        } & {
            ensRegistry?: import("viem").ChainContract | undefined;
            ensUniversalResolver?: import("viem").ChainContract | undefined;
            multicall3?: import("viem").ChainContract | undefined;
            universalSignatureVerifier?: import("viem").ChainContract | undefined;
        }> | undefined;
        id: 31337;
        name: "Foundry";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "Ether";
            readonly symbol: "ETH";
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["http://127.0.0.1:8545"];
                readonly webSocket: readonly ["ws://127.0.0.1:8545"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, import("viem").TestRpcSchema<"anvil" | "hardhat">, {
        mode: "anvil" | "hardhat";
    } & import("viem").TestActions>) => client) => import("viem").Client<import("viem").HttpTransport, {
        blockExplorers?: {
            [key: string]: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
            default: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
        } | undefined;
        contracts?: import("viem").Prettify<{
            [key: string]: import("viem").ChainContract | {
                [sourceId: number]: import("viem").ChainContract | undefined;
            } | undefined;
        } & {
            ensRegistry?: import("viem").ChainContract | undefined;
            ensUniversalResolver?: import("viem").ChainContract | undefined;
            multicall3?: import("viem").ChainContract | undefined;
            universalSignatureVerifier?: import("viem").ChainContract | undefined;
        }> | undefined;
        id: 31337;
        name: "Foundry";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "Ether";
            readonly symbol: "ETH";
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["http://127.0.0.1:8545"];
                readonly webSocket: readonly ["ws://127.0.0.1:8545"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, import("viem").TestRpcSchema<"anvil" | "hardhat">, { [K in keyof client]: client[K]; } & {
        mode: "anvil" | "hardhat";
    } & import("viem").TestActions>;
};
//# sourceMappingURL=createViemTestClient.d.ts.map