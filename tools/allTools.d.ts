import { WalletClient } from 'viem';
export interface ToolConfig<T = any, W = WalletClient> {
    definition: {
        type: 'function';
        function: {
            name: string;
            description: string;
            parameters: {
                type: 'object';
                properties: Record<string, unknown>;
                required: string[];
            };
        };
    };
    handler: (args: T, walletClient?: W) => Promise<any>;
}
export declare function createTools(walletClient?: WalletClient): Record<string, ToolConfig<any, WalletClient>>;
//# sourceMappingURL=allTools.d.ts.map