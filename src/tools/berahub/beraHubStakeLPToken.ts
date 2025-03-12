import { BerahubVaultABI } from '../../constants/abis/berahubVaultABI';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';
import { log } from '../../utils/logger';

type LPTokenPair =
  | 'WBERA_HONEY'
  | 'WBTC_WBERA'
  | 'WETH_WBERA'
  | 'BYUSD_HONEY'
  | 'USDCE_HONEY';

interface BeraHubStakeLPTokenArgs {
  stakeAmount: number;
  lpTokenPair: LPTokenPair;
}

const LP_TOKEN_CONFIG: Record<
  LPTokenPair,
  { token: string; vault: string; description: string }
> = {
  WBERA_HONEY: {
    token: 'HONEY_WBERA',
    vault: 'BeraHubHoneyWBera',
    description: 'WBera-Honey',
  },
  WBTC_WBERA: {
    token: 'WBERA_WBTC',
    vault: 'BeraHubWBTCWBera',
    description: 'WBTC-WBera',
  },
  WETH_WBERA: {
    token: 'WBERA_WETH',
    vault: 'BeraHubWETHWBera',
    description: 'WETH-WBera',
  },
  BYUSD_HONEY: {
    token: 'HONEY_BYUSD',
    vault: 'BeraHubBYUSDHoney',
    description: 'BYUSD-Honey',
  },
  USDCE_HONEY: {
    token: 'HONEY_USDCE',
    vault: 'BeraHubUSDCEHoney',
    description: 'HONEY-USDCE',
  },
};

export const beraHubStakeLPTokenTool: ToolConfig<BeraHubStakeLPTokenArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'berahub_stake_lp',
      description: 'Stake LP tokens on Berahub',
      parameters: {
        type: 'object',
        properties: {
          stakeAmount: {
            type: 'number',
            description: 'The amount of LP tokens to stake',
          },
          lpTokenPair: {
            type: 'string',
            enum: Object.keys(LP_TOKEN_CONFIG),
            description:
              'The LP token pair to stake (e.g., WBERA_HONEY, WBTC_WBERA, etc.)',
          },
        },
        required: ['stakeAmount', 'lpTokenPair'],
      },
    },
  },
  handler: async (
    args: BeraHubStakeLPTokenArgs,
    config: ConfigChain,
    walletClient?: WalletClient,
  ) => {
    try {
      if (!walletClient || !walletClient.account) {
        throw new Error('Wallet client is not provided');
      }

      const lpConfig = LP_TOKEN_CONFIG[args.lpTokenPair];
      if (!lpConfig) {
        throw new Error(`Invalid LP token pair: ${args.lpTokenPair}`);
      }

      const tokenKey = lpConfig.token as keyof typeof config.TOKEN;
      const vaultKey = lpConfig.vault as keyof typeof config.CONTRACT;

      log.info(
        `[INFO] Starting stake of ${args.stakeAmount} ${lpConfig.description} LP tokens from ${walletClient.account?.address}`
      );

      const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        config.TOKEN[tokenKey],
        args.stakeAmount,
      );

      await checkBalance(
        walletClient,
        parsedStakeAmount,
        config.TOKEN[tokenKey],
      );

      log.info(`[INFO] Checking allowance for ${config.TOKEN[tokenKey]}`);

      // check allowance
      await checkAndApproveAllowance(
        walletClient,
        config.TOKEN[tokenKey],
        config.CONTRACT[vaultKey],
        parsedStakeAmount,
      );

      log.info(
        `[INFO] Staking ${parsedStakeAmount.toString()} ${lpConfig.description} LP tokens to ${config.CONTRACT[vaultKey]}`,
      );

      const tx = await walletClient.writeContract({
        address: config.CONTRACT[vaultKey],
        abi: BerahubVaultABI,
        functionName: 'stake',
        args: [parsedStakeAmount],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      log.info(`[INFO] Stake successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      log.error(`[ERROR] Stake failed: ${error.message}`);
      throw new Error(`Stake failed: ${error.message}`);
    }
  },
};
