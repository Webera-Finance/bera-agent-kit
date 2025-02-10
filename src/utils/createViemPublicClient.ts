import { createPublicClient, http } from 'viem';
import { berachain } from 'viem/chains';

export function createViemPublicClient() {
  return createPublicClient({
    chain: berachain,
    transport: http(),
  });
}
