export const TestnetChainConfig: ConfigChain = {
  TOKEN: {
    WBERA: '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8' as `0x${string}`,
    IBGT: '0x46eFC86F0D7455F135CC9df501673739d513E982' as `0x${string}`,
    HONEY: '0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03' as `0x${string}`,
    BGT: '0xbDa130737BDd9618301681329bF2e46A016ff9Ad' as `0x${string}`,
  },
  URL: {
    BEXRouteURL: 'https://bartio-bex-router.berachain.com/dex/route',
    OogaBoogaURL: 'https://bartio.api.oogabooga.io',
    BGTVaultURL:
      'https://bartio-pol-indexer.berachain.com/berachain/v1alpha1/beacon/vaults?pageSize=9999',
  },
};

export const MainnetChainConfig: ConfigChain = {
  TOKEN: {
    WBERA: '0x6969696969696969696969696969696969696969' as `0x${string}`,
    IBGT: 'todo' as `0x${string}`,
    HONEY: '0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce' as `0x${string}`,
    BGT: '0x656b95E550C07a9ffe548bd4085c72418Ceb1dba' as `0x${string}`,
  },
  URL: {
    BEXRouteURL: 'todo',
    OogaBoogaURL: 'https://mainnet.api.oogabooga.io',
    BGTVaultURL: 'todo',
  },
};

export type ConfigChain = {
  TOKEN: { [tokenName: string]: `0x${string}` };
  URL: {
    BEXRouteURL: string;
    OogaBoogaURL: string;
    BGTVaultURL: string;
  };
};

export const ConfigChainId = {
  80084: TestnetChainConfig,
  80094: MainnetChainConfig,
};
