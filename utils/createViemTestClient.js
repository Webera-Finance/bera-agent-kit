"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViemTestClient = createViemTestClient;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
function createViemTestClient(mode) {
    return (0, viem_1.createTestClient)({
        chain: chains_1.foundry,
        mode: mode,
        transport: (0, viem_1.http)(),
    });
}
//# sourceMappingURL=createViemTestClient.js.map