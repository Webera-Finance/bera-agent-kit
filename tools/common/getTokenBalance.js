"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenBalanceTool = void 0;
const createViemPublicClient_1 = require("../../utils/createViemPublicClient");
const index_1 = require("../../constants/index");
const tokenABI_1 = require("../../constants/tokenABI");
const helpers_1 = require("../../utils/helpers");
exports.getTokenBalanceTool = {
    definition: {
        type: 'function',
        function: {
            name: 'get_token_balance',
            description: 'Get the token balance of a wallet',
            parameters: {
                type: 'object',
                properties: {
                    wallet: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The wallet address to get the balance of. Default is current wallet provider',
                    },
                    tokenName: {
                        type: 'string',
                        description: 'The name of the token to get the balance',
                    },
                },
                required: ['wallet', 'tokenName'],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            const { wallet, tokenName } = args;
            const address = wallet || walletClient?.account?.address;
            if (!tokenName) {
                throw new Error('Token name is required');
            }
            const publicClient = (0, createViemPublicClient_1.createViemPublicClient)();
            // find the token address from the token name
            const foundTokenName = Object.keys(index_1.TOKEN).find(key => key.toLowerCase() === tokenName.toLowerCase());
            if (!foundTokenName) {
                throw new Error(`Token ${tokenName} not found`);
            }
            const tokenAddress = index_1.TOKEN[foundTokenName];
            if (!tokenAddress) {
                throw new Error(`Token ${foundTokenName} address not found`);
            }
            const rawTokenBalanceOfWallet = await publicClient.readContract({
                address: tokenAddress,
                abi: tokenABI_1.TokenABI,
                functionName: 'balanceOf',
                args: [address],
            });
            const formattedTokenBalanceOfWallet = await (0, helpers_1.fetchTokenDecimalsAndFormatAmount)(publicClient, tokenAddress, rawTokenBalanceOfWallet);
            return formattedTokenBalanceOfWallet;
        }
        catch (error) {
            console.error(`[ERROR] Get Token Balance failed: ${error}`);
            throw new Error(`Get Token Balance  failed: ${error}`);
        }
    },
};
//# sourceMappingURL=getTokenBalance.js.map