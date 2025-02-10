import { createPublicClient, http } from 'viem';
import { berachain, berachainTestnetbArtio } from 'viem/chains';
import { EnumTypeEnv } from './enum';

export function createViemPublicClient() {
  const env = process.env.ENV_TYPE;
  return createPublicClient({
    chain: env === EnumTypeEnv.Testnet ? berachainTestnetbArtio : berachain,
    transport: http(),
  });
}
