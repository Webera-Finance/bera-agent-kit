import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { BEND_ABI } from '../../constants/bendABI';
import { CONTRACT } from '../../constants/index';
import { createViemWalletClient } from '../../utils/createViemWalletClient';
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { log } from '../../utils/logger';

interface BendRepayArgs {
  asset: Address;
  amount: number;
  interestRateMode?: number; // 1 for stable, 2 for variable
}

export const bendRepayTool: ToolConfig<BendRepayArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'bend_repay',
      description: 'Repay borrowed tokens to Bend Protocol',
      parameters: {
        type: 'object',
        properties: {
          asset: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Token address to repay',
          },
          amount: {
            type: 'number',
            description: 'The amount of tokens to repay',
          },
          interestRateMode: {
            type: 'number',
            enum: [1, 2],
            description: 'Interest rate mode (1 for stable, 2 for variable)',
            default: 2,
          },
        },
        required: ['asset', 'amount'],
      },
    },
  },
  handler: async (args, walletClient?: WalletClient) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      const onBehalfOf = walletClient.account.address;
      const interestRateMode = BigInt(args.interestRateMode || 2); // Default to variable rate

      // Parse amount with correct decimals
      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.asset,
        args.amount,
      );

      // Check and approve token allowance
      await checkAndApproveAllowance(
        walletClient,
        args.asset,
        CONTRACT.Bend,
        parsedAmount,
      );

      // Execute repay
      const hash = await walletClient.writeContract({
        address: CONTRACT.Bend,
        abi: BEND_ABI,
        functionName: 'repay',
        args: [args.asset, parsedAmount, interestRateMode, onBehalfOf],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      log.info(`Successfully repaid tokens to Bend. Transaction hash: ${hash}`);
      return hash;
    } catch (error: any) {
      log.error(`Bend repay failed: ${error.message}`);
      throw error;
    }
  },
};
