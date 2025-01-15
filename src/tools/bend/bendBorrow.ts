import { Address } from 'viem';
import { ToolConfig } from '../allTools';
import { BEND_ABI } from '../../constants/bendABI';
import { CONTRACT } from '../../constants/index';
import { createViemWalletClient } from '../../utils/createViemWalletClient';
import { fetchTokenDecimalsAndParseAmount } from '../../utils/helpers';
import { log } from '../../utils/logger';

interface BendBorrowArgs {
  asset: Address;
  amount: number;
  interestRateMode?: number; // 1 for stable, 2 for variable
}

export const bendBorrowTool: ToolConfig<BendBorrowArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'bend_borrow',
      description: 'Borrow tokens from Bend Protocol',
      parameters: {
        type: 'object',
        properties: {
          asset: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Token address to borrow',
          },
          amount: {
            type: 'number',
            description: 'The amount of tokens to borrow',
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
  handler: async args => {
    try {
      const walletClient = createViemWalletClient();
      const onBehalfOf = walletClient.account.address;
      const referralCode = 0;
      const interestRateMode = BigInt(args.interestRateMode || 2); // Default to variable rate

      // Parse amount with correct decimals
      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.asset,
        args.amount,
      );

      // Execute borrow
      const hash = await walletClient.writeContract({
        address: CONTRACT.Bend,
        abi: BEND_ABI,
        functionName: 'borrow',
        args: [
          args.asset,
          parsedAmount,
          interestRateMode,
          referralCode,
          onBehalfOf,
        ],
      });

      log.info(
        `Successfully borrowed tokens from Bend. Transaction hash: ${hash}`,
      );
      return hash;
    } catch (error: any) {
      log.error(`Bend borrow failed: ${error.message}`);
      throw error;
    }
  },
};
