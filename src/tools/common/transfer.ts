import { Address, parseUnits, WalletClient, zeroAddress } from 'viem';
import { ToolConfig } from '../allTools';
import { parseEther } from 'viem/utils';
import { TokenABI } from '../../constants/tokenABI';
import { log } from '../../utils/logger';
import { fetchTokenDecimals } from '../../utils/helpers';
import { ConfigChain } from '../../constants/chain';

interface TransferArgs {
  to: Address;
  amount: number;
  tokenAddress?: Address;
}

export const transferTool: ToolConfig<TransferArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'transfer',
      description: 'Transfer native currency or ERC20 tokens to a recipient',
      parameters: {
        type: 'object',
        properties: {
          to: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: "The recipient's public address",
          },
          amount: {
            type: 'number',
            description: 'The amount to transfer in Ether or token units',
          },
          tokenAddress: {
            type: 'string',
            pattern: '^0x[a-fA-F0-9]{40}$',
            description: 'Optional ERC20 token address for token transfers',
          },
        },
        required: ['to', 'amount'],
      },
    },
  },
  handler: async (
    { to, amount, tokenAddress },
    _config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      console.info(
        `[INFO] Start transfer ${amount} ${tokenAddress === zeroAddress ? 'BERA' : tokenAddress} from ${walletClient.account?.address} to ${to} `,
      );
      let tx: string;

      if (!tokenAddress || tokenAddress === zeroAddress) {
        tx = await walletClient.sendTransaction({
          to,
          value: parseEther(amount.toString()),
          account: walletClient.account,
          chain: walletClient.chain,
        });
      } else {
        const decimals = await fetchTokenDecimals(walletClient, tokenAddress);

        const parsedAmount = parseUnits(amount.toString(), decimals);
        tx = await walletClient.writeContract({
          address: tokenAddress,
          abi: TokenABI,
          functionName: 'transfer',
          args: [to, parsedAmount],
          chain: walletClient.chain,
          account: walletClient.account,
        });
      }

      // const receipt = await walletClient.waitForTransactionReceipt({
      //   hash: tx as `0x${string}`,
      // });

      // if (receipt.status !== "success") {
      //   throw new Error(`transaction status ${receipt.status}`);
      // }
      return tx;
    } catch (error: any) {
      log.error(
        `[INFO] Transfer ${amount} ${tokenAddress} to ${to} error: ${error.message}`,
      );
      throw new Error(
        `Transfer ${amount} ${tokenAddress} to ${to} error: ${error.message}`,
      );
    }
  },
};
