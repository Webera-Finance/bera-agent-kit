"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performRun = exports.createRun = exports.createThread = exports.createAssistant = exports.createTools = exports.log = exports.createViemPublicClient = exports.createViemWalletClient = exports.BeraAgent = void 0;
// Main exports
require("dotenv/config");
const openai_1 = __importDefault(require("openai"));
// Agent-related imports
const createAssistant_1 = require("./ai-agents/createAssistant");
const createThread_1 = require("./ai-agents/createThread");
const createRun_1 = require("./ai-agents/createRun");
const performRun_1 = require("./ai-agents/performRun");
const logger_1 = require("./utils/logger");
const createViemWalletClient_1 = require("./utils/createViemWalletClient");
class BeraAgent {
    constructor(config) {
        this.assistant = null;
        this.thread = null;
        this.openAIClient = new openai_1.default(config.openAIConfig);
        // Use provided wallet client or create a default one
        this.walletClient = config.walletClient || (0, createViemWalletClient_1.createViemWalletClient)();
    }
    async initialize() {
        this.assistant = await (0, createAssistant_1.createAssistant)(this.openAIClient, this.walletClient);
        this.thread = await (0, createThread_1.createThread)(this.openAIClient);
    }
    async sendMessage(message) {
        if (!this.assistant || !this.thread) {
            throw new Error('BeraAgent not initialized. Call initialize() first.');
        }
        logger_1.log.info(`Sending message: ${message} for wallet ${this.walletClient.account?.address}`);
        await this.openAIClient.beta.threads.messages.create(this.thread.id, {
            role: 'user',
            content: message,
        });
        const run = await (0, createRun_1.createRun)(this.openAIClient, this.thread, this.assistant.id);
        const result = await (0, performRun_1.performRun)(run, this.openAIClient, this.thread, this.walletClient);
        if (result?.type === 'text') {
            return result.text.value;
        }
        throw new Error('Unexpected response format');
    }
    getAssistant() {
        return this.assistant;
    }
    getThread() {
        return this.thread;
    }
    getWalletClient() {
        return this.walletClient;
    }
}
exports.BeraAgent = BeraAgent;
// Utility exports
var createViemWalletClient_2 = require("./utils/createViemWalletClient");
Object.defineProperty(exports, "createViemWalletClient", { enumerable: true, get: function () { return createViemWalletClient_2.createViemWalletClient; } });
var createViemPublicClient_1 = require("./utils/createViemPublicClient");
Object.defineProperty(exports, "createViemPublicClient", { enumerable: true, get: function () { return createViemPublicClient_1.createViemPublicClient; } });
var logger_2 = require("./utils/logger");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return logger_2.log; } });
// Tool exports
var allTools_1 = require("./tools/allTools");
Object.defineProperty(exports, "createTools", { enumerable: true, get: function () { return allTools_1.createTools; } });
// Agent-related exports
var createAssistant_2 = require("./ai-agents/createAssistant");
Object.defineProperty(exports, "createAssistant", { enumerable: true, get: function () { return createAssistant_2.createAssistant; } });
var createThread_2 = require("./ai-agents/createThread");
Object.defineProperty(exports, "createThread", { enumerable: true, get: function () { return createThread_2.createThread; } });
var createRun_2 = require("./ai-agents/createRun");
Object.defineProperty(exports, "createRun", { enumerable: true, get: function () { return createRun_2.createRun; } });
var performRun_2 = require("./ai-agents/performRun");
Object.defineProperty(exports, "performRun", { enumerable: true, get: function () { return performRun_2.performRun; } });
// Constants and types
__exportStar(require("./constants"), exports);
__exportStar(require("./tools/allTools"), exports);
//# sourceMappingURL=index.js.map