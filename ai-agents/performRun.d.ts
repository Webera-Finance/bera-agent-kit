import OpenAI from 'openai';
import { Run } from 'openai/resources/beta/threads/runs';
import { Thread } from 'openai/resources/beta/threads';
import { WalletClient } from 'viem';
export declare function performRun(run: Run, client: OpenAI, thread: Thread, walletClient: WalletClient): Promise<{
    type: string;
    text: {
        value: string;
    };
} | null>;
//# sourceMappingURL=performRun.d.ts.map