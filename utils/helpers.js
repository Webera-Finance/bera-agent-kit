"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchVaultAndTokenAddress = exports.checkAndApproveAllowance = exports.fetchTokenDecimalsAndParseAmount = exports.fetchTokenDecimalsAndFormatAmount = exports.fetchTokenDecimals = void 0;
const viem_1 = require("viem");
const tokenABI_1 = require("../constants/tokenABI");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const logger_1 = require("./logger");
const createViemPublicClient_1 = require("./createViemPublicClient");
const tokenDecimalsCache = new Map();
const fetchTokenDecimals = async (walletClient, token) => {
    console.log('token', token);
    if (!token || token === constants_1.TOKEN.BERA) {
        return 18;
    }
    if (!tokenDecimalsCache.has(token)) {
        if (token) {
            logger_1.log.info(`[INFO] Fetching token decimals for ${token}`);
            const tokenDecimals = await walletClient.readContract({
                address: token,
                abi: tokenABI_1.TokenABI,
                functionName: 'decimals',
                args: [],
            });
            tokenDecimalsCache.set(token, Number(tokenDecimals));
        }
        else {
            tokenDecimalsCache.set(token, 18);
        }
    }
    return tokenDecimalsCache.get(token);
};
exports.fetchTokenDecimals = fetchTokenDecimals;
const fetchTokenDecimalsAndFormatAmount = async (walletClient, token, amount) => {
    const tokenDecimals = await (0, exports.fetchTokenDecimals)(walletClient, token);
    const formattedAmount = (0, viem_1.formatUnits)(amount, tokenDecimals);
    console.log(`[INFO] Formatted amount: ${formattedAmount.toString()} units`);
    return formattedAmount;
};
exports.fetchTokenDecimalsAndFormatAmount = fetchTokenDecimalsAndFormatAmount;
const fetchTokenDecimalsAndParseAmount = async (walletClient, token, amount) => {
    const tokenDecimals = await (0, exports.fetchTokenDecimals)(walletClient, token);
    const parsedAmount = (0, viem_1.parseUnits)(amount.toString(), tokenDecimals);
    logger_1.log.info(`[INFO] Parsed amount: ${parsedAmount.toString()} units`);
    return parsedAmount;
};
exports.fetchTokenDecimalsAndParseAmount = fetchTokenDecimalsAndParseAmount;
const checkAndApproveAllowance = async (walletClient, token, spender, amount) => {
    if (!token || token === constants_1.TOKEN.BERA) {
        return;
    }
    const publicClient = (0, createViemPublicClient_1.createViemPublicClient)();
    logger_1.log.info(`[INFO] Checking allowance for ${token} to spender ${spender}`);
    // Fetch current allowance
    const allowance = await publicClient.readContract({
        address: token,
        abi: tokenABI_1.TokenABI,
        functionName: 'allowance',
        args: [walletClient.account.address, spender],
    });
    if (BigInt(allowance) < amount) {
        logger_1.log.info(`[INFO] Allowance insufficient. Approving ${amount} for spender ${spender}`);
        // Approve the required amount
        const approvalTx = await walletClient.writeContract({
            address: token,
            abi: tokenABI_1.TokenABI,
            functionName: 'approve',
            args: [spender, amount],
            chain: walletClient.chain,
            account: walletClient.account.address,
        });
        const approvalReceipt = await publicClient.waitForTransactionReceipt({
            hash: approvalTx,
        });
        if (approvalReceipt.status !== 'success') {
            throw new Error('Approval transaction failed');
        }
        logger_1.log.info(`[INFO] Approval successful`);
    }
    else {
        logger_1.log.info(`[INFO] Sufficient allowance available`);
    }
};
exports.checkAndApproveAllowance = checkAndApproveAllowance;
const fetchVaultAndTokenAddress = async (token, isVault) => {
    try {
        logger_1.log.info(`[INFO] Fetching vaults data...`);
        const response = await axios_1.default.get(constants_1.URL.BGTVaultURL);
        const vaults = response.data.vaults;
        for (const vault of vaults) {
            if (isVault && vault.vaultAddress === token) {
                logger_1.log.info(`[INFO] Found matching vault: ${vault.vaultAddress}`);
                return {
                    vaultAddress: vault.vaultAddress,
                    stakingTokenAddress: vault.stakingTokenAddress,
                };
            }
            else if (!isVault && vault.stakingTokenAddress === token) {
                logger_1.log.info(`[INFO] Found matching staking token: ${vault.stakingTokenAddress}`);
                return {
                    vaultAddress: vault.vaultAddress,
                    stakingTokenAddress: vault.stakingTokenAddress,
                };
            }
        }
        throw new Error(`No matching ${isVault ? 'staking token' : 'vault'} address found for ${token}`);
    }
    catch (error) {
        logger_1.log.error(`[ERROR] Failed to fetch addresses: ${error.message}`);
        throw error;
    }
};
exports.fetchVaultAndTokenAddress = fetchVaultAndTokenAddress;
//# sourceMappingURL=helpers.js.map