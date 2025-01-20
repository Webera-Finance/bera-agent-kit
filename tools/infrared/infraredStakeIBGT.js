"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infraredStakeIBGTTool = void 0;
const index_1 = require("../../constants/index");
const helpers_1 = require("../../utils/helpers");
const infraredABI_1 = require("../../constants/infraredABI");
exports.infraredStakeIBGTTool = {
    definition: {
        type: 'function',
        function: {
            name: 'infrared_stake_ibgt',
            description: 'Stake iBGT on Infrared',
            parameters: {
                type: 'object',
                properties: {
                    stakeAmount: {
                        type: 'number',
                        description: 'The amount of iBGT to stake',
                    },
                },
                required: ['stakeAmount'],
            },
        },
    },
    handler: async (args, walletClient) => {
        try {
            if (!walletClient || !walletClient.account) {
                throw new Error('Wallet client is not provided');
            }
            // constants
            const ibgtTokenAddress = index_1.TOKEN.IBGT;
            const infraredIBGTVaultAddress = index_1.CONTRACT.InfraredIBGTVault;
            const parsedStakeAmount = await (0, helpers_1.fetchTokenDecimalsAndParseAmount)(walletClient, ibgtTokenAddress, args.stakeAmount);
            console.log(`[INFO] Checking allowance for ${ibgtTokenAddress}`);
            // check allowance
            await (0, helpers_1.checkAndApproveAllowance)(walletClient, ibgtTokenAddress, index_1.CONTRACT.InfraredIBGTVault, parsedStakeAmount);
            console.log(`[INFO] Staking ${parsedStakeAmount.toString()} iBGT`);
            const tx = await walletClient.writeContract({
                address: infraredIBGTVaultAddress,
                abi: infraredABI_1.InfraredVaultABI,
                functionName: 'stake',
                args: [parsedStakeAmount],
                chain: walletClient.chain,
                account: walletClient.account,
            });
            // const receipt = await walletClient.waitForTransactionReceipt({
            //   hash: tx as `0x${string}`,
            // });
            // if (receipt.status !== 'success') {
            //   throw new Error(
            //     `Stake transaction failed with status: ${receipt.status}`,
            //   );
            // }
            console.log(`[INFO] Stake successful: Transaction hash: ${tx}`);
            return tx;
        }
        catch (error) {
            console.error(`[ERROR] Stake failed: ${error.message}`);
            throw new Error(`Stake failed: ${error.message}`);
        }
    },
};
//# sourceMappingURL=infraredStakeIBGT.js.map