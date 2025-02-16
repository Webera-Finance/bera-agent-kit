import { Address, WalletClient, parseUnits } from 'viem';
import { ToolConfig } from '../allTools';
import { rocketLaunchABI } from '../../constants/rocketLaunchABI';
import { log } from '../../utils/logger';
import { DECIMAL, ADDRESS_NULL, PLATFORM_FEE,RL_API_URL } from './constance';
import { ConfigChain } from '../../constants/chain';
import axios from 'axios';

interface RocketLaunchLaunchPoolArgs {
    name: string;
    symbol: string;
    totalSupply: bigint;
    fixedCapETH: bigint;
    image: string;
    description?: string;
    tokenForAirdrop?: bigint;
    tokenForFarm?: bigint;
    tokenForSale?: bigint;
    tokenForAddLP?: bigint;
    tokenPerPurchase?: bigint;
    maxRepeatPurchase?: bigint;
    startTime: number;
    endTime: number;
    minDurationSell?: number;
    maxDurationSell?: number;
    numberBatch?: number;
    maxAmountETH?: number;
    referrer?: Address;
    websiteLink?: string;
    telegramLink?: string;
    twitterLink?: string;
    discordLink?: string;
}

export const rocketLaunchLaunchPoolTool: ToolConfig<RocketLaunchLaunchPoolArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'rocketlaunch_launch_pool',
            description: 'Launch a new pool on RocketLaunch',
            parameters: {
                type: 'object',
                properties: {
                    name: { type: 'string', description: 'Name of the pool' },
                    symbol: { type: 'string', description: 'Token symbol' },
                    image: { type: 'string', description: 'Token image URL', format: 'uri' },
                    totalSupply: { type: 'string', description: 'Total token supply (bigint as string)' },
                    fixedCapETH: { type: 'string', description: 'Fixed cap in ETH (bigint as string)' },
                    startTime: { type: 'number', description: 'Start time of the pool (Unix timestamp)' },
                    endTime: { type: 'number', description: 'End time of the pool (Unix timestamp)' }
                },
                required: ['name', 'symbol', 'totalSupply', 'fixedCapETH', 'image', 'startTime', 'endTime'],
            },
        },
    },
    handler: async (args,config:ConfigChain,walletClient?: WalletClient) => {
        try {
            if (!walletClient?.account) {
                throw new Error('Wallet client is not provided');
            }

            const { totalSupply, fixedCapETH, image, startTime, endTime } = args;

            const chainId = await walletClient.getChainId();
            const signature = image.split('/t/')[1]?.split('/icon.')[0] || null;

            const metadata = {
                image,
                description: args.description ?? '',
                website: args.websiteLink ?? '',
                telegram: args.telegramLink ?? '',
                twitter: args.twitterLink ?? '',
                discord: args.discordLink ?? '',
            };

            const metadataUrl = `${RL_API_URL}/c/${chainId}/t/${signature}/metadata`;
            await axios.post(metadataUrl, { metadata, signature });

            const minDurationSell = (args.minDurationSell ?? 12) * 3600;
            const maxDurationSell = endTime - startTime;
            if (minDurationSell > maxDurationSell) return;

            const totalSupplyBn = parseUnits(totalSupply.toString(), DECIMAL);
            const tokenForSale = (totalSupplyBn * 70n) / 100n;
            const tokenForFarm = (totalSupplyBn * 5n) / 100n;
            const tokenForAirdrop = (totalSupplyBn * 5n) / 100n;
            const tokenForAddLP = totalSupplyBn - tokenForSale - tokenForFarm - tokenForAirdrop;

            const inputData = {
                name: args.name.trim(),
                symbol: args.symbol.trim(),
                decimals: DECIMAL,
                totalSupply: totalSupplyBn,
                fixedCapETH: parseUnits(fixedCapETH.toString(), DECIMAL),
                tokenForAirdrop,
                tokenForFarm,
                tokenForSale,
                tokenForAddLP,
                tokenPerPurchase: tokenForSale / 1000n,
                maxRepeatPurchase: parseUnits("100", DECIMAL),
                startTime,
                minDurationSell,
                maxDurationSell,
                metadata: metadataUrl,
                numberBatch: args.numberBatch ?? 0,
                maxAmountETH: args.maxAmountETH ?? 0,
                referrer: args.referrer ?? ADDRESS_NULL
            };

            log.info("[ERROR] Launching pool with data:", inputData);

            const maxAmount = parseUnits((args.maxAmountETH ?? 0).toString(), DECIMAL);
            const platformFee = parseUnits((PLATFORM_FEE[chainId as keyof typeof PLATFORM_FEE] || 0).toString(), DECIMAL);

            return await walletClient.writeContract({
                address: config.CONTRACT.RocketLaunch,
                abi: rocketLaunchABI,
                functionName: 'launchPool',
                args: [inputData],
                chain: walletClient.chain,
                account: walletClient.account,
                value: maxAmount + platformFee
            });

        } catch (error: any) {
            log.error(`[ERROR] Failed to launch pool: ${error.message}`);
            throw new Error(`Failed to launch pool: ${error.message}`);
        }
    },
};
