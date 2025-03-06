import { parseUnits, WalletClient, zeroAddress } from 'viem';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';
import {
  checkAndApproveAllowance,
  fetchTokenDecimals,
} from '../../utils/helpers';
import { ConfigChain } from '../../constants/chain';
import { getWeberaVaultAddress } from './utils';
import weberaAbi from '../../constants/abis/weberaABI';
import { createViemPublicClient } from '../../utils';
import { SupportedChainId } from '../../utils/enum';

interface WeberaWithdrawArgs {
  amount: number;
  token: string;
  vault: 'honey' | 'bera' | 'beraLst';
}

export const weberaWithdrawTool: ToolConfig<WeberaWithdrawArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'webera_withdraw',
      description: 'Withdraw Bera/Honey tokens from Webera Finance vault',
      parameters: {
        type: 'object',
        properties: {
          amount: {
            type: 'number',
            description: 'The amount to withdraw',
          },
          token: {
            type: 'string',
            description: 'What token for withdrawing from Webera Vault',
          },
          vault: {
            type: 'string',
            description: 'What vault for withdrawing from Webera',
            enum: ['honey', 'bera', 'beraLst'],
          },
        },
        required: ['token', 'amount', 'vault'],
      },
    },
  },
  handler: async (
    { token, amount, vault },
    _config: ConfigChain,
    walletClient: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      log.info(
        `[INFO] Start withdraw ${amount} ${token === zeroAddress || !token ? 'BERA' : token} from ${vault} to ${walletClient.account?.address} `,
      );
      let tx: string;
      const tokenAddress =
        token === zeroAddress ? _config.TOKEN.BERA : _config.TOKEN[token];

      if (!tokenAddress) {
        throw new Error(`Token ${token} not found`);
      }

      const vaultAddress = getWeberaVaultAddress(vault, _config);
      const decimals = await fetchTokenDecimals(walletClient, tokenAddress);
      const parsedAmount = parseUnits(amount.toString(), decimals);

      const routerAddress = _config.CONTRACT.WeberaRouterVault;

      // check allowance
      await checkAndApproveAllowance(
        walletClient,
        vaultAddress,
        routerAddress,
        parsedAmount,
      );

      const publicClient = createViemPublicClient(
        walletClient.chain!.id === SupportedChainId.Testnet,
      );

      let maxWithdrawal = 0n;

      try {
        maxWithdrawal = await publicClient.readContract({
          address: routerAddress,
          abi: weberaAbi,
          functionName: 'getMaxWithdrawal',
          args: [vaultAddress, walletClient.account.address, tokenAddress],
        });
      } catch (error: any) {
        throw new Error(
          `[ERROR] Failed to get max withdrawal: ${error.message}`,
        );
      }

      if (parsedAmount > maxWithdrawal) {
        throw new Error(
          `[ERROR] Withdraw amount ${parsedAmount.toString()} is greater than max withdrawal ${maxWithdrawal.toString()}`,
        );
      }

      tx = await walletClient.writeContract({
        address: routerAddress,
        abi: weberaAbi,
        functionName: 'withdraw',
        args: [parsedAmount, vaultAddress, tokenAddress],
        chain: walletClient.chain,
        account: walletClient.account,
      });
      return tx;
    } catch (error: any) {
      throw new Error(
        `[ERROR] Withdraw ${amount} ${token} from ${vault} error: ${error.message}`,
      );
    }
  },
};
