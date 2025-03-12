import { BerahubVaultABI } from '../../constants/abis/berahubVaultABI';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';
import { log } from '../../utils/logger';
import { ToolConfig } from '../allTools';

type LPTokenPair =
  | 'WBERA_HONEY'
  | 'WBTC_WBERA'
  | 'WETH_WBERA'
  | 'BYUSD_HONEY'
  | 'USDCE_HONEY';

interface BeraHubClaimBGTArgs {
  lpTokenPair: LPTokenPair;
  recipient?: string; // Optional recipient address
}

const LP_TOKEN_CONFIG: Record<
  LPTokenPair,
  { vault: string; description: string }
> = {
  WBERA_HONEY: {
    vault: 'BeraHubHoneyWBera',
    description: 'WBera-Honey',
  },
  WBTC_WBERA: {
    vault: 'BeraHubWBTCWBera',
    description: 'WBTC-WBera',
  },
  WETH_WBERA: {
    vault: 'BeraHubWETHWBera',
    description: 'WETH-WBera',
  },
  BYUSD_HONEY: {
    vault: 'BeraHubBYUSDHoney',
    description: 'BYUSD-Honey',
  },
  USDCE_HONEY: {
    vault: 'BeraHubUSDCEHoney',
    description: 'HONEY-USDCE',
  },
};

export const beraHubClaimBGTTool: ToolConfig<BeraHubClaimBGTArgs> = {
  definition: {
    type: 'function',
    function: {
      name: 'berahub_claim_bgt',
      description: 'Claim BGT rewards from Berahub vaults',
      parameters: {
        type: 'object',
        properties: {
          lpTokenPair: {
            type: 'string',
            enum: Object.keys(LP_TOKEN_CONFIG),
            description:
              'The LP token pair vault to claim from (e.g., WBERA_HONEY, WBTC_WBERA, etc.)',
          },
          recipient: {
            type: 'string',
            description:
              'Optional recipient address for the rewards. If not provided, sender will receive the rewards.',
          },
        },
        required: ['lpTokenPair'],
      },
    },
  },
  handler: async (
    args: BeraHubClaimBGTArgs,
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

      const vaultKey = lpConfig.vault as keyof typeof config.CONTRACT;
      const recipient = args.recipient || walletClient.account.address;

      log.info(
        `[INFO] Claiming BGT rewards from ${lpConfig.description} vault (${config.CONTRACT[vaultKey]}) for ${recipient}`,
      );

      const tx = await walletClient.writeContract({
        address: config.CONTRACT[vaultKey],
        abi: BerahubVaultABI,
        functionName: 'getReward',
        args: [walletClient.account.address, recipient],
        chain: walletClient.chain,
        account: walletClient.account,
      });

      log.info(`[INFO] Claim successful: Transaction hash: ${tx}`);
      return tx;
    } catch (error: any) {
      log.error(`[ERROR] Claim failed: ${error.message}`);
      throw new Error(`Claim failed: ${error.message}`);
    }
  },
};
