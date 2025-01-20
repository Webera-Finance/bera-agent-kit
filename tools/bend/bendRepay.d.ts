import { Address } from 'viem';
import { ToolConfig } from '../allTools';
interface BendRepayArgs {
    asset: Address;
    amount: number;
    interestRateMode?: number;
}
export declare const bendRepayTool: ToolConfig<BendRepayArgs>;
export {};
//# sourceMappingURL=bendRepay.d.ts.map