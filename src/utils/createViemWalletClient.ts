import { createWalletClient, http, publicActions } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { berachain, berachainTestnetbArtio } from 'viem/chains';
import { EnumTypeEnv } from './enum';
import 'dotenv/config';

export function createViemWalletClient() {
  const env = process.env.ENV_TYPE;
  if (!process.env.PRIVATE_KEY) {
    throw new Error('[INFO] PRIVATE_KEY environment variable is not set.');
  }

  const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

  return createWalletClient({
    account,
    chain: env === EnumTypeEnv.Testnet ? berachainTestnetbArtio : berachain,
    transport: http(),
  }).extend(publicActions);
}
