"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceTool = void 0;
const viem_1 = require("viem");
const createViemPublicClient_1 = require("../../utils/createViemPublicClient");
exports.getBalanceTool = {
    definition: {
        type: 'function',
        function: {
            name: 'get_balance',
            description: 'Get the balance of a wallet. If wallet is not provided, it will use the current wallet provider',
            parameters: {
                type: 'object',
                properties: {
                    wallet: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The wallet address to get the balance of. Default is current wallet provider',
                    },
                },
                required: [],
            },
        },
    },
    handler: async (args, walletClient) => {
        const publicClient = (0, createViemPublicClient_1.createViemPublicClient)();
        const address = args.wallet || walletClient?.account?.address;
        console.log('Getting balance for wallet', address);
        const balance = await publicClient.getBalance({ address });
        return (0, viem_1.formatEther)(balance);
    },
};
//# sourceMappingURL=getBalance.js.map