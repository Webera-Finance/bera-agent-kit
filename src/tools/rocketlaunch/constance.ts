export const DECIMAL = 18;
export const ADDRESS_NULL = '0x0000000000000000000000000000000000000000';
export const RL_API_URL = 'https://mot-stg-api.rocketlaunch.fun';
export enum ChainId {
    BERACHAIN = 80094,
    BARTIO = 80084,
    BASE = 8453,
    BASE_SEPOLIA = 84532,
    POLYGON_AMOY = 80002,
    ARTELA = 11822,
    UNICHAIN_SEPOLIA = 1301,
    IOTA = 8822
}
export const PLATFORM_FEE = {
    [ChainId.BERACHAIN]: 0.1,
    [ChainId.BASE]: 0.005,
    [ChainId.POLYGON_AMOY]: 0.005,
    [ChainId.ARTELA]: 0.005,
    [ChainId.BASE_SEPOLIA]: 0.005,
    [ChainId.BARTIO]: 0.0001,
    [ChainId.UNICHAIN_SEPOLIA]: 0.005,
    [ChainId.IOTA]: 0.05
};