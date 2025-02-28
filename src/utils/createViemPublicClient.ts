import { createPublicClient, http } from 'viem';
import { berachain, berachainTestnetbArtio } from 'viem/chains';

export function createViemPublicClient(isTestnet?: boolean) {
  return createPublicClient({
    chain: isTestnet ? berachainTestnetbArtio : berachain,
    transport: http(),
  });
}
