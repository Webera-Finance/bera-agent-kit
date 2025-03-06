import { parseUnits, WalletClient, zeroAddress } from 'viem';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimals,
} from '../../utils/helpers';
import { ConfigChain } from '../../constants/chain';
import { getWeberaVaultAddress } from './utils';
import weberaAbi from '../../constants/abis/weberaABI';

interface WeberaDepositArgs {
  amount: number;
  token: string;
  vault: 'honey' | 'bera' | 'beraLst';
}

export const weberaDepositTool: ToolConfig<WeberaDepositArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'webera_deposit',
      description: 'Deposit Bera/Honey tokens to Webera Finance vault',
      parameters: {
        type: 'object',
        properties: {
          amount: {
            type: 'number',
            description: 'The amount to deposit',
          },
          token: {
            type: 'string',
            description: 'What token for depositing in Webera Vault',
          },
          vault: {
            type: 'string',
            description: 'What vault for depositing in Webera',
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
        `[INFO] Start deposit ${amount} ${token === zeroAddress || !token ? 'BERA' : token} to ${vault} from ${walletClient.account?.address} `,
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

      log.info(
        `[INFO] Checking allowance for ${tokenAddress} to ${vaultAddress}`,
      );

      await checkBalance(walletClient, parsedAmount, tokenAddress);

      const routerAddress = _config.CONTRACT.WeberaRouterVault;
      // check allowance
      await checkAndApproveAllowance(
        walletClient,
        tokenAddress,
        routerAddress,
        parsedAmount,
      );

      log.info(
        `[INFO] Depositing ${parsedAmount.toString()} ${tokenAddress} to ${vaultAddress}`,
      );

      tx = await walletClient.writeContract({
        address: routerAddress,
        abi: weberaAbi,
        functionName: 'deposit',
        args: [parsedAmount, vaultAddress, tokenAddress],
        chain: walletClient.chain,
        account: walletClient.account,
        value: token === zeroAddress ? parsedAmount : BigInt(0),
      });
      return tx;
    } catch (error: any) {
      throw new Error(
        `Deposit ${amount} ${token} to ${vault} error: ${error.message}`,
      );
    }
  },
};
