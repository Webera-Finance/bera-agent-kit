"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infraredWithdrawStakedIBGTTool = void 0;
const index_1 = require("../../constants/index");
// import { createViemWalletClient } from '../../utils/createViemWalletClient';
const helpers_1 = require("../../utils/helpers");
const infraredABI_1 = require("../../constants/infraredABI");
const utils_1 = require("bera-agent-kit/utils");
exports.infraredWithdrawStakedIBGTTool = {
    definition: {
        type: 'function',
        function: {
            name: 'infrared_withdraw_staked_ibgt',
            description: 'Withdraw staked iBGT on Infrared',
            parameters: {
                type: 'object',
                properties: {
                    withdrawAmount: {
                        type: 'number',
                        description: 'The amount of iBGT to withdraw from Infrared',
                    },
                },
                required: ['withdrawAmount'],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            const publicClient = (0, utils_1.createViemPublicClient)();
            // constants
            const ibgtTokenAddress = index_1.TOKEN.IBGT;
            const infraredIBGTVaultAddress = index_1.CONTRACT.InfraredIBGTVault;
            const parsedWithdrawAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, ibgtTokenAddress, args.withdrawAmount);
            console.log(`[INFO] Checking allowance for ${ibgtTokenAddress}`);
            // check staked iBGT amount
            const stakedIBGT = (await publicClient.readContract({
                address: infraredIBGTVaultAddress,
                abi: infraredABI_1.InfraredVaultABI,
                functionName: 'balanceOf',
                args: [walletClient.account.address],
            }));
            if (parsedWithdrawAmount > stakedIBGT) {
                throw new Error(`Withdraw amount exceeds staked iBGT amount: 
            - staked iBGT: ${stakedIBGT.toString()}
            - withdraw amount: ${parsedWithdrawAmount.toString()}`);
            }
            console.log(`[INFO] Withdrawing ${parsedWithdrawAmount.toString()} iBGT`);
            const tx = await walletClient.writeContract({
                address: infraredIBGTVaultAddress,
                abi: infraredABI_1.InfraredVaultABI,
                functionName: 'withdraw',
                args: [parsedWithdrawAmount],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            // const receipt = await walletClient.waitForTransactionReceipt({
            //   hash: tx as `0x${string}`,
            // });
            // if (receipt.status !== 'success') {
            //   throw new Error(
            //     `Withdraw transaction failed with status: ${receipt.status}`,
            //   );
            // }
            console.log(`[INFO] Withdraw successful: Transaction hash: ${tx}`);
            return tx;
        }
        catch (error) {
            console.error(`[ERROR] Withdraw failed: ${error.message}`);
            throw new Error(`Withdraw failed: ${error.message}`);
        }
    },
};
//# sourceMappingURL=infraredWithdrawStakedIBGT.js.map