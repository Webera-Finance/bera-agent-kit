import { Address, WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';
import { pot2pumpFacadeABI } from '../../constants/honeypotFinanceABI';
import {
  checkAndApproveAllowance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ConfigChain } from '../../constants/chain';

interface Pot2PumpClaimArgs {
  launchedToken: Address;
  raisedToken: Address;
  raisedTokenAmount: number;
}

export const pot2pumpClaimTool: ToolConfig<Pot2PumpClaimArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'claim',
      description: 'Claim from a pot2pump project',
      parameters: {
        type: 'object',
        properties: {
          launchedToken: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Token address to deposit',
          },
          raisedToken: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Token address to deposit',
          },
          raisedTokenAmount: {
            type: 'number',
            description: 'The amount of tokens to deposit',
          },
        },
        required: ['launchedToken', 'raisedToken', 'raisedTokenAmount'],
      },
    },
  },
  handler: async (args, config: ConfigChain, walletClient?: WalletClient) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }
      // Parse amount with correct decimals
      const parsedAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        args.raisedToken,
        args.raisedTokenAmount,
      );

      // Check and approve token allowance
      await checkAndApproveAllowance(
        walletClient,
        args.raisedToken,
        config.CONTRACT.Pot2PumpFacade,
        parsedAmount,
      );

      // Execute deposit
      const hash = await walletClient.writeContract({
        address: config.CONTRACT.Pot2PumpFacade,
        abi: pot2pumpFacadeABI,
        functionName: 'deposit',
        args: [args.launchedToken, parsedAmount],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      log.info(
        `Successfully deposited into pot2pump project. Transaction hash: ${hash}`,
      );
      return hash;
    } catch (error: any) {
      log.error(`Pot2Pump deposit failed: ${error.message}`);
      throw error;
    }
  },
};
