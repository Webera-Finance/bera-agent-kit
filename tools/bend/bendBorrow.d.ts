import { Address } from 'viem';
import { ToolConfig } from '../allTools';
interface BendBorrowArgs {
    asset: Address;
    amount: number;
    interestRateMode?: number;
}
export declare const bendBorrowTool: ToolConfig<BendBorrowArgs>;
export {};
//# sourceMappingURL=bendBorrow.d.ts.map