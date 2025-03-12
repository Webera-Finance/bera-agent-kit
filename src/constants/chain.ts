export const TestnetChainConfig: ConfigChain = {
  TOKEN: {
    BERA: '0x0000000000000000000000000000000000000000' as `0x${string}`,
    WBERA: '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8' as `0x${string}`,
    IBGT: '0x46eFC86F0D7455F135CC9df501673739d513E982' as `0x${string}`,
    HONEY: '0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03' as `0x${string}`,
    BGT: '0xbDa130737BDd9618301681329bF2e46A016ff9Ad' as `0x${string}`,
    HONEY_BYUSD: '0xde04c469ad658163e2a5e860a03a86b52f6fa8c8' as `0x${string}`,
    HONEY_USDCE: '0xf961a8f6d8c69e7321e78d254ecafbcc3a637621' as `0x${string}`,
    HONEY_WBERA: '0x2c4a603A2aA5596287A06886862dc29d56DbC354' as `0x${string}`,
    WBERA_WBTC: '0x38fdd999fe8783037db1bbfe465759e312f2d809' as `0x${string}`,
    WBERA_WETH: '0xdd70a5ef7d8cfe5c5134b5f9874b09fb5ce812b4' as `0x${string}`,
  },
  URL: {
    BEXRouteURL: 'https://bartio-bex-router.berachain.com/dex/route',
    OogaBoogaURL: 'https://bartio.api.oogabooga.io',
    BGTVaultURL:
      'https://bartio-pol-indexer.berachain.com/berachain/v1alpha1/beacon/vaults?pageSize=9999',
  },
  CONTRACT: {
    OBRouter: '0xF6eDCa3C79b4A3DFA82418e278a81604083b999D' as `0x${string}`,
    KodiakSwapRouter02:
      '0x496e305c03909ae382974caca4c580e1bf32afbe' as `0x${string}`,
    KodiakUniswapV2Router02:
      '0x406846114B2A9b65a8A2Ab702C2C57d27784dBA2' as `0x${string}`,
    KodiakNfPM: 'todo' as `0x${string}`,
    BeraCrocMultiSwap:
      '0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D' as `0x${string}`,
    Infrared: '0xe41779952f5485db5440452DFa43350556AA4673' as `0x${string}`,
    InfraredBribeCollector:
      '0xeD8DAB845Ff8FFf76d59AD1eEaBE1cad6CC4F10f' as `0x${string}`,
    InfraredBribes:
      '0xd9D4EfC1c67CF118D76FbB32b31C695A1D5e427e' as `0x${string}`,
    InfraredIBGTVault:
      '0x31E6458C83C4184A23c761fDAffb61941665E012' as `0x${string}`,
    Bend: '0x30A3039675E5b5cbEA49d9a5eacbc11f9199B86D' as `0x${string}`,
    Pot2PumpFactory:
      '0x30DbCcdFE17571c2Cec5caB61736a5AF194b1593' as `0x${string}`,
    Pot2PumpFacade:
      '0x29F4D4511dA9771F0529872923fb48F4ACfEDcc2' as `0x${string}`,
    HoneypotNonfungiblePositionManager:
      '0x29a738deAFdd2c6806e2f66891D812A311799828' as `0x${string}`,
    InfraredByusdHoney: '0xbbB228B0D7D83F86e23a5eF3B1007D0100581613' as `0x${string}`,
    InfraredUsdceHoney: '0x1419515d3703d8F2cc72Fa6A341685E4f8e7e8e1' as `0x${string}`,
    InfraredHoneyWBera: '0xe2d8941dfb85435419D90397b09D18024ebeef2C' as `0x${string}`,
    InfraredWBTCWBera: '0x78beda3a06443f51718d746aDe95b5fAc094633E' as `0x${string}`,
    InfraredWETHWBera: '0x0dF14916796854d899576CBde69a35bAFb923c22' as `0x${string}`,
    IBera: '0x9b6761bf2397Bb5a6624a856cC84A3A14Dcd3fe5' as `0x${string}`,
    MemeswapStakeBera: '0x21F18c02B2487024018Ef3a4D95f9D436867743d' as `0x${string}`,
    WeberaRouterVault: 'todo' as `0x${string}`,
    WeberaHoneyVault: 'todo' as `0x${string}`,
    WeberaBeraVault: 'todo' as `0x${string}`,
    WeberaBeraLstVault: 'todo' as `0x${string}`,
    BeraBorrowPool: 'todo' as `0x${string}`,
    BeraHubHoneyWBera: 'todo' as `0x${string}`,
    BeraHubWBTCWBera: 'todo' as `0x${string}`,
    BeraHubWETHWBera: 'todo' as `0x${string}`,
    BeraHubBYUSDHoney: 'todo' as `0x${string}`,
    BeraHubUSDCEHoney: 'todo' as `0x${string}`,
  },
};

export const MainnetChainConfig: ConfigChain = {
  TOKEN: {
    BERA: '0x0000000000000000000000000000000000000000' as `0x${string}`,
    WBERA: '0x6969696969696969696969696969696969696969' as `0x${string}`,
    IBGT: '0xac03caba51e17c86c921e1f6cbfbdc91f8bb2e6b',
    HONEY: '0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce' as `0x${string}`,
    BGT: '0x656b95E550C07a9ffe548bd4085c72418Ceb1dba' as `0x${string}`,
    USDC: '0x549943e04f40284185054145c6E4e9568C1D3241' as `0x${string}`,
    BYUSD_HONEY: '0xde04c469ad658163e2a5e860a03a86b52f6fa8c8',
    USDCE_HONEY: '0xf961a8f6d8c69e7321e78d254ecafbcc3a637621',
    WBERA_HONEY: '0x2c4a603A2aA5596287A06886862dc29d56DbC354',
    WBTC_WBERA: '0x38fdd999fe8783037db1bbfe465759e312f2d809',
    WETH_WBERA: '0xdd70a5ef7d8cfe5c5134b5f9874b09fb5ce812b4',
    NECTAR: '0x1ce0a25d13ce4d52071ae7e02cf1f6606f4c79d3' as `0x${string}`,
  },
  URL: {
    BEXRouteURL: 'todo',
    OogaBoogaURL: 'https://mainnet.api.oogabooga.io',
    BGTVaultURL: 'todo',
  },
  CONTRACT: {
    OBRouter: '0xFd88aD4849BA0F729D6fF4bC27Ff948Ab1Ac3dE7' as `0x${string}`,
    KodiakSwapRouter02:
      '0xe301E48F77963D3F7DbD2a4796962Bd7f3867Fb4' as `0x${string}`,
    KodiakUniswapV2Router02:
      '0xd91dd58387Ccd9B66B390ae2d7c66dBD46BC6022' as `0x${string}`,
    KodiakNfPM: '0xFE5E8C83FFE4d9627A75EaA7Fee864768dB989bD' as `0x${string}`,
    BeraCrocMultiSwap:
      '0x4Be03f781C497A489E3cB0287833452cA9B9E80B' as `0x${string}`,
    Infrared: 'todo' as `0x${string}`,
    InfraredBribeCollector: 'todo' as `0x${string}`,
    InfraredBribes: 'todo' as `0x${string}`,
    InfraredIBGTVault: '0x75f3be06b02e235f6d0e7ef2d462b29739168301',
    Bend: 'todo' as `0x${string}`,
    Pot2PumpFactory: 'todo' as `0x${string}`,
    Pot2PumpFacade: 'todo' as `0x${string}`,
    HoneypotNonfungiblePositionManager: 'todo' as `0x${string}`,
    InfraredByusdHoney: '0xbbB228B0D7D83F86e23a5eF3B1007D0100581613',
    InfraredUsdceHoney: '0x1419515d3703d8F2cc72Fa6A341685E4f8e7e8e1',
    InfraredHoneyWBera: '0xe2d8941dfb85435419D90397b09D18024ebeef2C',
    InfraredWBTCWBera: '0x78beda3a06443f51718d746aDe95b5fAc094633E',
    InfraredWETHWBera: '0x0dF14916796854d899576CBde69a35bAFb923c22',
    IBera: '0x9b6761bf2397Bb5a6624a856cC84A3A14Dcd3fe5',
    MemeswapStakeBera: '0x21F18c02B2487024018Ef3a4D95f9D436867743d',
    WeberaRouterVault: '0xf44328d75638eec3E2f7075846c7596E92774aD2',
    WeberaHoneyVault: '0x4eAD3867554E597C7B0d511dC68ceaD59286870D',
    WeberaBeraVault: '0x55a050f76541C2554e9dfA3A0b4e665914bF92EA',
    WeberaBeraLstVault: '0xCf1bfB3F9dc663F6775f999239E646e0021CCc0B',
    BeraBorrowPool: '0x597877ccf65be938bd214c4c46907669e3e62128',
    BeraHubHoneyWBera: '0xC2BaA8443cDA8EBE51a640905A8E6bc4e1f9872c',
    BeraHubWBTCWBera: '0x086f82fa0cA310Cc835a9DB4f53697687ef149c7',
    BeraHubWETHWBera: '0x17376aD6167a5592FbEAA42e6068c132474a513d',
    BeraHubBYUSDHoney: '0x6649Bc987a7c0fB0199c523de1b1b330cd0457A8',
    BeraHubUSDCEHoney: '0xF99be47baf0c22B7eB5EAC42c8D91b9942Dc7e84',
  },
};

export type ConfigChain = {
  TOKEN: { [tokenName: string]: `0x${string}` };
  URL: {
    BEXRouteURL: string;
    OogaBoogaURL: string;
    BGTVaultURL: string;
  };
  CONTRACT: {
    OBRouter: `0x${string}`;
    KodiakSwapRouter02: `0x${string}`;
    KodiakUniswapV2Router02: `0x${string}`;
    KodiakNfPM: `0x${string}`;
    BeraCrocMultiSwap: `0x${string}`;
    Infrared: `0x${string}`;
    InfraredBribeCollector: `0x${string}`;
    InfraredBribes: `0x${string}`;
    InfraredIBGTVault: `0x${string}`;
    Bend: `0x${string}`;
    Pot2PumpFactory: `0x${string}`;
    Pot2PumpFacade: `0x${string}`;
    HoneypotNonfungiblePositionManager: `0x${string}`;
    InfraredByusdHoney: `0x${string}`;
    InfraredUsdceHoney: `0x${string}`;
    InfraredHoneyWBera: `0x${string}`;
    InfraredWBTCWBera: `0x${string}`;
    InfraredWETHWBera: `0x${string}`;
    IBera: `0x${string}`;
    MemeswapStakeBera: `0x${string}`;
    WeberaRouterVault: `0x${string}`;
    WeberaHoneyVault: `0x${string}`;
    WeberaBeraVault: `0x${string}`;
    WeberaBeraLstVault: `0x${string}`;
    BeraBorrowPool: `0x${string}`;
    BeraHubHoneyWBera: `0x${string}`;
    BeraHubWBTCWBera: `0x${string}`;
    BeraHubWETHWBera: `0x${string}`;
    BeraHubBYUSDHoney: `0x${string}`;
    BeraHubUSDCEHoney: `0x${string}`;
  };
};

export const ConfigChainId = {
  80084: TestnetChainConfig,
  80094: MainnetChainConfig,
};
