import {
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

export const getTokenBalance = async (walletClient: WalletClient, tokenAddress?: Address) => {
  try {
    const envType = 
      walletClient?.chain?.id === SupportedChainId.Mainnet ? true : false;
    const publicClient = createViemPublicClient(envType);

    if (tokenAddress) {
      // Get ERC20 token balance
      const balance = await publicClient.readContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [walletClient.account!.address],
      });
      return balance;
    } else {
      // Get native token balance
      log.info(
        `[INFO] Fetching native token balance for address: ${walletClient.account!.address}`,
      );
      return await publicClient.getBalance({
        address: walletClient.account!.address,
      });
    }
  } catch (error: any) {
    log.error(`[ERROR] Failed to fetch token balance: ${error.message}`);
    throw error;
  }
};
