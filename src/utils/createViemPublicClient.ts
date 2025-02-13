import { createPublicClient, http } from 'viem';
import { berachain, berachainTestnetbArtio } from 'viem/chains';
import { EnumTypeEnv } from './enum';

export function createViemPublicClient(envType?: EnumTypeEnv) {
  return createPublicClient({
    chain: envType === EnumTypeEnv.Testnet ? berachainTestnetbArtio : berachain,
    transport: http(),
  });
}
