import { Address } from 'viem';
import { ToolConfig } from '../allTools';
import { BEND_ABI } from '../../constants/bendABI';
import { CONTRACT } from '../../constants/index';
import { createViemWalletClient } from '../../utils/createViemWalletClient';
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { log } from '../../utils/logger';

interface BendSupplyArgs {
  asset: Address;
  amount: number;
}

export const bendSupplyTool: ToolConfig<BendSupplyArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'bend_supply',
      description: 'Supply (deposit) tokens to Bend Protocol',
      parameters: {
        type: 'object',
        properties: {
          asset: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Token address to supply',
          },
          amount: {
            type: 'number',
            description: 'The amount of tokens to supply',
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

      // Parse amount with correct decimals
      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.asset,
        args.amount,
      );

      // Check and approve allowance if needed
      await checkAndApproveAllowance(
        walletClient,
        args.asset,
        CONTRACT.Bend,
        parsedAmount,
      );

      // Execute supply transaction
      const hash = await walletClient.writeContract({
        address: CONTRACT.Bend,
        abi: BEND_ABI,
        functionName: 'supply',
        args: [args.asset, parsedAmount, onBehalfOf, 0], // referralCode set to 0
      });

      log.info(
        `Successfully supplied tokens to Bend. Transaction hash: ${hash}`,
      );
      return hash;
    } catch (error: any) {
      log.error(`Bend supply failed: ${error.message}`);
      throw error;
    }
  },
};
