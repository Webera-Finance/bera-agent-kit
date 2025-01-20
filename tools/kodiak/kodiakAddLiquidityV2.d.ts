import { Address } from 'viem';
import { ToolConfig } from '../allTools';
interface KodiakAddLiquidityArgs {
    tokenA: Address;
    tokenB: Address;
    amountADesired: number;
    amountBDesired: number;
    amountAMin: number;
    amountBMin: number;
    to?: Address;
}
export declare const kodiakAddLiquidityTool: ToolConfig<KodiakAddLiquidityArgs>;
export {};
//# sourceMappingURL=kodiakAddLiquidityV2.d.ts.map