"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferTool = void 0;
const viem_1 = require("viem");
const utils_1 = require("viem/utils");
const tokenABI_1 = require("../../constants/tokenABI");
const logger_1 = require("../../utils/logger");
const constants_1 = require("../../constants");
const helpers_1 = require("../../utils/helpers");
exports.transferTool = {
    definition: {
        type: 'function',
        function: {
            name: 'transfer',
            description: 'Transfer native currency or ERC20 tokens to a recipient',
            parameters: {
                type: 'object',
                properties: {
                    to: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: "The recipient's public address",
                    },
                    amount: {
                        type: 'number',
                        description: 'The amount to transfer in Ether or token units',
                    },
                    tokenAddress: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'Optional ERC20 token address for token transfers',
                    },
                },
                required: ['to', 'amount'],
            },
        },
    },
    handler: async ({ to, amount, tokenAddress }, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            console.info(`[INFO] Start transfer ${amount} ${tokenAddress === constants_1.TOKEN.BERA ? 'BERA' : tokenAddress} from ${walletClient.account?.address} to ${to} `);
            let tx;
            if (!tokenAddress || tokenAddress === constants_1.TOKEN.BERA) {
                tx = await walletClient.sendTransaction({
                    to,
                    value: (0, utils_1.parseEther)(amount.toString()),
                    account: walletClient.account,
                    chain: walletClient.chain,
                });
            }
            else {
                const decimals = await (0, helpers_1.fetchTokenDecimals)(walletClient, tokenAddress);
                const parsedAmount = (0, viem_1.parseUnits)(amount.toString(), decimals);
                tx = await walletClient.writeContract({
                    address: tokenAddress,
                    abi: tokenABI_1.TokenABI,
                    functionName: 'transfer',
                    args: [to, parsedAmount],
                    chain: walletClient.chain,
                    account: walletClient.account,
                });
            }
            // const receipt = await walletClient.waitForTransactionReceipt({
            //   hash: tx as `0x${string}`,
            // });
            // if (receipt.status !== "success") {
            //   throw new Error(`transaction status ${receipt.status}`);
            // }
            return tx;
        }
        catch (error) {
            logger_1.log.error(`[INFO] Transfer ${amount} ${tokenAddress} to ${to} error: ${error.message}`);
            throw new Error(`Transfer ${amount} ${tokenAddress} to ${to} error: ${error.message}`);
        }
    },
};
//# sourceMappingURL=transfer.js.map