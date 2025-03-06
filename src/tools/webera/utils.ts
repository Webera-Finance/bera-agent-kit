import { ConfigChain } from '../../constants/chain';

export const getWeberaVaultAddress = (
  vault: 'honey' | 'bera' | 'beraLst',
  _config: ConfigChain,
) => {
  if (vault === 'beraLst') {
    return _config.CONTRACT.WeberaBeraLstVault;
  }
  if (vault === 'bera') {
    return _config.CONTRACT.WeberaBeraVault;
  }
  if (vault === 'honey') {
    return _config.CONTRACT.WeberaHoneyVault;
  }
  throw new Error(`Vault ${vault} not found`);
};
