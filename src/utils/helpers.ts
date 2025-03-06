import {
  Abi,
  Address,
  erc20Abi,
  formatUnits,
  parseUnits,
  WalletClient,
  zeroAddress,
} from 'viem';
import axios from 'axios';
import { log } from './logger';
import { createViemPublicClient } from './createViemPublicClient';
import { ConfigChain } from '../constants/chain';
import { SupportedChainId } from './enum';

const tokenDecimalsCache: Map<string, number> = new Map();

export const fetchTokenDecimals = async (
  walletClient: any,
  tokenAddress: Address,
): Promise<number> => {
  if (!tokenAddress || tokenAddress === zeroAddress) {
    return 18;
  }

  if (!tokenDecimalsCache.has(tokenAddress)) {
    if (tokenAddress) {
      const tokenDecimals = await walletClient.readContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'decimals',
        args: [],
      });
      tokenDecimalsCache.set(tokenAddress, Number(tokenDecimals));
    } else {
      tokenDecimalsCache.set(tokenAddress, 18);
    }
  }

  return tokenDecimalsCache.get(tokenAddress)!;
};

export const fetchTokenDecimalsAndFormatAmount = async (
  walletClient: any,
  tokenAddress: Address,
  amount: bigint,
): Promise<string> => {
  const tokenDecimals = await fetchTokenDecimals(walletClient, tokenAddress);
  const formattedAmount = formatUnits(amount, tokenDecimals);
  return formattedAmount;
};

export const fetchTokenDecimalsAndParseAmount = async (
  walletClient: any,
  tokenAddress: Address,
  amount: number | bigint,
): Promise<bigint> => {
  const tokenDecimals = await fetchTokenDecimals(walletClient, tokenAddress);
  const parsedAmount = parseUnits(amount.toString(), tokenDecimals);
  return parsedAmount;
};

export const checkAndApproveAllowance = async (
  walletClient: WalletClient,
  tokenAddress: Address,
  spender: Address,
  amount: bigint,
): Promise<void> => {
  try {
    if (!tokenAddress || tokenAddress === zeroAddress) {
      return;
    }

    const isTestnet = walletClient?.chain?.id === SupportedChainId.Testnet;
    const publicClient = createViemPublicClient(isTestnet);

    log.info(
      `[INFO] Checking allowance for ${tokenAddress} to spender ${spender}`,
    );

    // Fetch current allowance
    const allowance = await publicClient.readContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [walletClient.account!.address, spender],
    });

    if (BigInt(allowance) < amount) {
      log.info(
        `[INFO] Allowance insufficient. Approving ${amount} for spender ${spender}`,
      );

      // Approve the required amount
      // @ts-ignore - Ignoring TypeScript error about missing chain property. Add chain make bug with walletClient/rpc
      const approvalTx = await walletClient.writeContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'approve',
        args: [spender, amount],
      });

      const approvalReceipt = await publicClient.waitForTransactionReceipt({
        hash: approvalTx as `0x${string}`,
      });

      if (approvalReceipt.status !== 'success') {
        throw new Error('Approval transaction failed');
      }

      log.info(`[INFO] Approval successful`);
    } else {
      log.info(`[INFO] Sufficient allowance available`);
    }
  } catch (error: any) {
    log.error(`[ERROR] Token approval failed: ${error.message}`);
    throw new Error(`Token approval failed: ${error.message}`);
  }
};

export const fetchVaultAndTokenAddress = async (
  tokenAddress: Address,
  isVault: boolean,
  config: ConfigChain,
): Promise<{ vaultAddress: Address; stakingTokenAddress: Address }> => {
  try {
    log.info(`[INFO] Fetching vaults data...`);
    const response = await axios.get(config.URL.BGTVaultURL);
    const vaults = response.data.vaults;

    for (const vault of vaults) {
      if (isVault && vault.vaultAddress === tokenAddress) {
        log.info(`[INFO] Found matching vault: ${vault.vaultAddress}`);
        return {
          vaultAddress: vault.vaultAddress as Address,
          stakingTokenAddress: vault.stakingTokenAddress as Address,
        };
      } else if (!isVault && vault.stakingTokenAddress === tokenAddress) {
        log.info(
          `[INFO] Found matching staking token: ${vault.stakingTokenAddress}`,
        );
        return {
          vaultAddress: vault.vaultAddress as Address,
          stakingTokenAddress: vault.stakingTokenAddress as Address,
        };
      }
    }

    throw new Error(
      `No matching ${isVault ? 'staking token' : 'vault'} address found for ${tokenAddress}`,
    );
  } catch (error: any) {
    log.error(`[ERROR] Failed to fetch addresses: ${error.message}`);
    throw error;
  }
};

export const getTokenBalance = async (
  walletClient: WalletClient,
  tokenAddress?: Address,
  contractAbi?: Abi,
): Promise<bigint> => {
  try {
    if (!walletClient.account) {
      throw new Error('Wallet account not found');
    }

    const abi = contractAbi ?? erc20Abi;

    const isTestnet = walletClient?.chain?.id === SupportedChainId.Testnet;
    const publicClient = createViemPublicClient(isTestnet);


    if (!tokenAddress || tokenAddress === zeroAddress) {
      // Get native token balance
      return await publicClient.getBalance({
        address: walletClient.account.address,
      });
    }

    // Get ERC20 token balance
    const balance = (await publicClient.readContract({
      address: tokenAddress,
      abi: abi,
      functionName: 'balanceOf',
      args: [walletClient.account.address],
    })) as bigint;

    return balance;
  } catch (error: any) {
    log.error(`[ERROR] Failed to get token balance: ${error.message}`);
    throw new Error(`Failed to get token balance: ${error.message}`);
  }
};

export const checkBalance = async (
  walletClient: WalletClient,
  requiredAmount: bigint,
  tokenAddress?: Address,
  contractAbi?: Abi,
): Promise<void> => {
  const balance = await getTokenBalance(walletClient, tokenAddress, contractAbi);
  
  if (balance < requiredAmount) {
    throw new Error(
      `Insufficient balance. Required: ${requiredAmount.toString()}, Available: ${balance.toString()}`,
    );
  }
  
  log.info(`[INFO] Sufficient balance available`);
};


