import { BerahubVaultABI } from '../../constants/abis/berahubVaultABI';
import { WalletClient } from 'viem';
import { ConfigChain } from '../../constants/chain';
import {
  checkAndApproveAllowance,
  checkBalance,
  fetchTokenDecimalsAndParseAmount,
} from '../../utils/helpers';
import { ToolConfig } from '../allTools';

interface BerahubStakeWETHWBeraArgs {
  stakeAmount: number;
}

export const berahubStakeWETHWBeraTool: ToolConfig<BerahubStakeWETHWBeraArgs> =
  {
    definition: {
      type: 'function',
      function: {
        name: 'berahub_stake_weth_wbera',
        description: 'Stake WETH-WBera on Berahub',
        parameters: {
          type: 'object',
          properties: {
            stakeAmount: {
              type: 'number',
              description: 'The amount of WETH-WBera to stake',
            },
          },
          required: ['stakeAmount'],
        },
      },
    },
    handler: async (
      args: BerahubStakeWETHWBeraArgs,
      config: ConfigChain,
      walletClient?: WalletClient,
    ) => {
      try {
        if (!walletClient || !walletClient.account) {
          throw new Error('Wallet client is not provided');
        }

        const parsedStakeAmount = await fetchTokenDecimalsAndParseAmount(
          walletClient,
          config.TOKEN.WBERA_WETH,
          args.stakeAmount,
        );

        await checkBalance(
          walletClient,
          parsedStakeAmount,
          config.TOKEN.WBERA_WETH,
        );

        console.log(`[INFO] Checking allowance for ${config.TOKEN.WETH_WBERA}`);

        // check allowance
        await checkAndApproveAllowance(
          walletClient,
          config.TOKEN.WBERA_WETH,
          config.CONTRACT.BeraHubWETHWBera,
          parsedStakeAmount,
        );

        console.log(
          `[INFO] Staking ${parsedStakeAmount.toString()} ${config.TOKEN.WBERA_WETH} to ${config.CONTRACT.BeraHubWETHWBera}`,
        );

        const tx = await walletClient.writeContract({
          address: config.CONTRACT.BeraHubWETHWBera,
          abi: BerahubVaultABI,
          functionName: 'stake',
          args: [parsedStakeAmount],
          chain: walletClient.chain,
          account: walletClient.account,
        });

        console.log(`[INFO] Stake successful: Transaction hash: ${tx}`);
        return tx;
      } catch (error: any) {
        console.error(`[ERROR] Stake failed: ${error.message}`);
        throw new Error(`Stake failed: ${error.message}`);
      }
    },
  };
