import { Address } from 'viem';
import { ToolConfig } from '../allTools';
interface TransferArgs {
    to: Address;
    amount: number;
    tokenAddress?: Address;
}
export declare const transferTool: ToolConfig<TransferArgs>;
export {};
//# sourceMappingURL=transfer.d.ts.map