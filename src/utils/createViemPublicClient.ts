import { createPublicClient, http } from 'viem';
import { berachain, berachainTestnetbArtio } from 'viem/chains';

export function createViemPublicClient(envType?: boolean) {
  return createPublicClient({
    chain: envType === false ? berachainTestnetbArtio : berachain,
    transport: http(),
  });
}
