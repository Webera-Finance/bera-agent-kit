import axios from 'axios';
import {
  Abi,
  Address,
  erc20Abi,
  formatUnits,
  parseUnits,
  WalletClient,
  zeroAddress,
} from 'viem';
import { LP_TOKEN_CONFIG } from '../constants';
import { ConfigChain } from '../constants/chain';
import { PoolConfig } from '../constants/types';
import { createViemPublicClient } from './createViemPublicClient';
import { SupportedChainId } from './enum';
import { log } from './logger';

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

export const checkAllowance = async (
  walletClient: WalletClient,
  tokenAddress: Address,
  spender: Address,
  amount: bigint,
): Promise<boolean> => {
  if (!tokenAddress || tokenAddress === zeroAddress) {
    return true;
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

  return BigInt(allowance) >= amount;
};

export const approveAllowance = async (
  walletClient: WalletClient,
  tokenAddress: Address,
  spender: Address,
  amount: bigint,
): Promise<void> => {
  const isTestnet = walletClient?.chain?.id === SupportedChainId.Testnet;
  const publicClient = createViemPublicClient(isTestnet);

  log.info(`[INFO] Approving ${amount} for spender ${spender}`);

  try {
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
  } catch (error: any) {
    log.error(`[ERROR] Token approval failed: ${error.message}`);
    throw new Error(`Token approval failed: ${error.message}`);
  }
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

    const hasSufficientAllowance = await checkAllowance(
      walletClient,
      tokenAddress,
      spender,
      amount,
    );

    if (!hasSufficientAllowance) {
      await approveAllowance(walletClient, tokenAddress, spender, amount);
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

export const getNativeTokenBalance = async (
  walletClient: WalletClient,
): Promise<bigint> => {
  try {
    if (!walletClient.account) {
      throw new Error('Wallet account not found');
    }
    const isTestnet = walletClient?.chain?.id === SupportedChainId.Testnet;
    const publicClient = createViemPublicClient(isTestnet);
    const balance = await publicClient.getBalance({
      address: walletClient.account.address,
    });
    return balance;
  } catch (error: any) {
    log.error(`[ERROR] Failed to get native token balance: ${error.message}`);
    throw new Error(`Failed to get native token balance: ${error.message}`);
  }
};

export const getTokenBalance = async (
  walletClient: WalletClient,
  tokenAddress: Address,
  contractAbi?: Abi,
): Promise<bigint> => {
  try {
    if (!walletClient.account) {
      throw new Error('Wallet account not found');
    }

    const abi = contractAbi ?? erc20Abi;
    const isTestnet = walletClient?.chain?.id === SupportedChainId.Testnet;
    const publicClient = createViemPublicClient(isTestnet);

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
  const balance =
    !tokenAddress || tokenAddress === zeroAddress
      ? await getNativeTokenBalance(walletClient)
      : await getTokenBalance(walletClient, tokenAddress, contractAbi);

  if (balance < requiredAmount) {
    throw new Error(
      `Insufficient balance. Required: ${requiredAmount.toString()}, Available: ${balance.toString()}`,
    );
  }

  log.info(`[INFO] Sufficient balance available`);
};

const resolveToken = (config: ConfigChain, tokenInput?: string) => {
  if (!tokenInput) return undefined;

  if (tokenInput.startsWith('0x')) {
    const entry = Object.entries(config.TOKEN).find(
      ([_, address]) => address.toLowerCase() === tokenInput.toLowerCase(),
    );
    return entry ? entry[0] : tokenInput;
  }
  return tokenInput;
};

export const getConfigByToolArgs = (
  args: { token0?: string; token1?: string; lpPair?: string },
  config: ConfigChain,
):
  | undefined
  | (PoolConfig & {
      token0Address: Address;
      token1Address: Address;
    }) => {
  // Return early if no tokens or LP pair provided
  if (!args.token0 && !args.token1 && !args.lpPair) {
    return undefined;
  }

  // Handle token addresses or symbols
  const token0Symbol = resolveToken(config, args.token0);
  const token1Symbol = resolveToken(config, args.token1);

  // Determine pair name
  const pairName =
    token0Symbol && token1Symbol
      ? `${token0Symbol.toUpperCase()}_${token1Symbol.toUpperCase()}`
      : args.lpPair?.replace(/\./g, '').toUpperCase() || '';

  if (!pairName) return undefined;

  // Get pool configuration
  const poolConfig = LP_TOKEN_CONFIG[pairName as keyof typeof LP_TOKEN_CONFIG];
  if (!poolConfig) return undefined;

  // Get token addresses from config
  const [configToken0, configToken1] = poolConfig.token.split('_');
  const token0Address = config.TOKEN[configToken0 as keyof typeof config.TOKEN];
  const token1Address = config.TOKEN[configToken1 as keyof typeof config.TOKEN];

  return {
    ...poolConfig,
    token0Address,
    token1Address,
  };
};
