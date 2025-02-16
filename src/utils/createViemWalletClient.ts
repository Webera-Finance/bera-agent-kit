import { createWalletClient, http, publicActions } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { berachain, berachainTestnetbArtio } from 'viem/chains';
import 'dotenv/config';

export function createViemWalletClient() {
  if (!process.env.PRIVATE_KEY) {
    throw new Error('[INFO] PRIVATE_KEY environment variable is not set.');
  }

  const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

  return createWalletClient({
    account,
    chain: berachain,
    transport: http(),
  }).extend(publicActions);
}

