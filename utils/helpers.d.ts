import { Address, WalletClient } from 'viem';
export declare const fetchTokenDecimals: (walletClient: any, token: Address) => Promise<number>;
export declare const fetchTokenDecimalsAndFormatAmount: (walletClient: any, token: Address, amount: bigint) => Promise<string>;
export declare const fetchTokenDecimalsAndParseAmount: (walletClient: any, token: Address, amount: number | bigint) => Promise<bigint>;
export declare const checkAndApproveAllowance: (walletClient: WalletClient, token: Address, spender: Address, amount: bigint) => Promise<void>;
export declare const fetchVaultAndTokenAddress: (token: Address, isVault: boolean) => Promise<{
    vaultAddress: Address;
    stakingTokenAddress: Address;
}>;
//# sourceMappingURL=helpers.d.ts.map