import OpenAI from 'openai';
import { Run } from 'openai/resources/beta/threads/runs';
import { Thread } from 'openai/resources/beta/threads';
import { WalletClient } from 'viem';
export declare function handleRunToolCalls(run: Run, client: OpenAI, thread: Thread, walletClient: WalletClient): Promise<Run>;
//# sourceMappingURL=handleRunToolCalls.d.ts.map