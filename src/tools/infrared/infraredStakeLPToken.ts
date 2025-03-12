import { WalletClient } from 'viem';
import { ToolConfig } from '../allTools';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { InfraredVaultContractABI } from '../../constants/abis/InfraredVaultContractABI';
import { ConfigChain } from '../../constants/chain';
import { log } from '../../utils/logger';
import { LPTokenPair } from 'bera-agent-kit/constants/types';
import { LP_TOKEN_CONFIG } from 'bera-agent-kit/constants';

interface InfraredStakeLPTokenArgs {
  stakeAmount: number;
  lpTokenPair: LPTokenPair;
}

export const infraredStakeLPTokenTool: ToolConfig<InfraredStakeLPTokenArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'infrared_stake_lp',
      description: 'Stake LP tokens on Infrared Protocol',
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
              'The LP token pair to stake (e.g., HONEY_WBERA, WBERA_WBTC, etc.)',
          },
        },
        required: ['stakeAmount', 'lpTokenPair'],
      },
    },
  },
  handler: async (
    args: InfraredStakeLPTokenArgs,
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
      const vaultKey = lpConfig.beraHubVault as keyof typeof config.CONTRACT;

      log.info(
        `[INFO] Starting stake of ${args.stakeAmount} ${lpConfig.description} LP tokens from ${walletClient.account?.address}`,
      );

      const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
        walletClient,
        config.TOKEN[tokenKey],
        args.stakeAmount,
      );

      await checkBalance(walletClient, parsedStakeAmount, config.TOKEN[tokenKey]);

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
        abi: InfraredVaultContractABI,
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
