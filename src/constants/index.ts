export const CONTRACT = {
  OBRouter: '0xF6eDCa3C79b4A3DFA82418e278a81604083b999D' as `0x${string}`,
  KodiakSwapRouter02:
    '0x496e305c03909ae382974caca4c580e1bf32afbe' as `0x${string}`,
  KodiakUniswapV2Router02:
    '0x406846114B2A9b65a8A2Ab702C2C57d27784dBA2' as `0x${string}`,
  BeraCrocMultiSwap:
    '0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D' as `0x${string}`,
  Infrared: '0xe41779952f5485db5440452DFa43350556AA4673' as `0x${string}`,
  InfraredBribeCollector:
    '0xeD8DAB845Ff8FFf76d59AD1eEaBE1cad6CC4F10f' as `0x${string}`,
  InfraredBribes: '0xd9D4EfC1c67CF118D76FbB32b31C695A1D5e427e' as `0x${string}`,
  InfraredIBGTVault:
    '0x31E6458C83C4184A23c761fDAffb61941665E012' as `0x${string}`,
  Bend: '0x30A3039675E5b5cbEA49d9a5eacbc11f9199B86D' as `0x${string}`,
} as const;

export const TOKEN: { [tokenName: string]: `0x${string}` } = {
  WBERA: '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8' as `0x${string}`,
  IBGT: '0x46eFC86F0D7455F135CC9df501673739d513E982' as `0x${string}`,
  HONEY: '0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03' as `0x${string}`,
  BGT: '0xbDa130737BDd9618301681329bF2e46A016ff9Ad' as `0x${string}`,
  BERA: '0x0000000000000000000000000000000000000000' as `0x${string}`,
} as const;

export const URL = {
  BEXRouteURL: 'https://bartio-bex-router.berachain.com/dex/route',
  OogaBoogaURL: 'https://bartio.api.oogabooga.io',
  BGTVaultURL:
    'https://bartio-pol-indexer.berachain.com/berachain/v1alpha1/beacon/vaults?pageSize=9999',
};
