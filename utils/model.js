"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpt4oMini = exports.gpt4o = void 0;
const openai_1 = require("@langchain/openai");
require("dotenv/config");
exports.gpt4o = new openai_1.ChatOpenAI({
    modelName: 'gpt-4o',
    apiKey: process.env.OPENAI_API_KEY,
});
exports.gpt4oMini = new openai_1.ChatOpenAI({
    modelName: 'gpt-4o-mini',
    apiKey: process.env.OPENAI_API_KEY,
});
//# sourceMappingURL=model.js.map