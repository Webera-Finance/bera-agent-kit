import { Address } from 'viem';
import { ToolConfig } from '../allTools';
interface KodiakSwapArgs {
    amountIn: number;
    amountOutMin: number;
    tokenIn?: Address;
    tokenOut: Address;
    to?: Address;
}
export declare const kodiakSwapTool: ToolConfig<KodiakSwapArgs>;
export {};
//# sourceMappingURL=kodiakSwap.d.ts.map