"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViemPublicClient = createViemPublicClient;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
function createViemPublicClient() {
    return (0, viem_1.createPublicClient)({
        chain: chains_1.berachainTestnetbArtio,
        transport: (0, viem_1.http)(),
    });
}
//# sourceMappingURL=createViemPublicClient.js.map