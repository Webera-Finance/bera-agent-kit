import { expect } from 'chai';
import { pot2pumpLaunchTool } from '../../../src/tools/honeypotFinance/pot2pumpLaunch';
import * as viemClientModule from '../../../src/utils/createViemWalletClient';
import * as helpersModule from '../../../src/utils/helpers';
import { parseEther } from 'viem';
import sinon from 'sinon';
import { CONTRACT, TOKEN } from '../../../src/constants';
import { pot2pumpFactoryABI } from '../../../src/constants/honeypotFinanceABI';
import { TestnetChainConfig } from '../../../src/constants/chain';

const mockWalletClient = {
  account: {
    address: '0x1234567890123456789012345678901234567890',
  },
  chain: {
    id: 1,
  },
  writeContract: sinon.stub(),
};

describe('pot2pumpLaunch Tool', () => {
  beforeEach(() => {
    mockWalletClient.writeContract.reset();
    sinon
      .stub(viemClientModule, 'createViemWalletClient')
      .returns(mockWalletClient as any);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should have correct function definition', () => {
    expect(pot2pumpLaunchTool.definition.type).to.equal('function');
    expect(pot2pumpLaunchTool.definition.function.name).to.equal('createPair');
    expect(
      pot2pumpLaunchTool.definition.function.parameters.required,
    ).to.deep.equal(['raisedToken', 'name', 'symbol', 'swapHandler']);
  });

  it('should successfully launch pot2pump project', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const mockTxHash = '0xmocktxhash';

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await pot2pumpLaunchTool.handler(
      {
        raisedToken: testAsset,
        name: 'testLaunch',
        symbol: 'TEST',
        swapHandler:
          TestnetChainConfig.CONTRACT.HoneypotNonfungiblePositionManager,
      },
      TestnetChainConfig,
      mockWalletClient as any,
    );

    expect(result).to.equal(mockTxHash);
    expect(mockWalletClient.writeContract.calledOnce).to.be.true;
    expect(mockWalletClient.writeContract.firstCall.args[0]).to.deep.equal({
      address: CONTRACT.Pot2PumpFactory,
      abi: pot2pumpFactoryABI,
      functionName: 'createPair',
      args: [
        {
          raisedToken: testAsset,
          name: 'testLaunch',
          symbol: 'TEST',
          swapHandler:
            TestnetChainConfig.CONTRACT.HoneypotNonfungiblePositionManager,
        },
      ],
      chain: mockWalletClient.chain,
      account: mockWalletClient.account,
    });
  });

  it('should handle errors during pot2pump launch', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const errorMessage = 'Pot2Pump launch failed';

    mockWalletClient.writeContract.rejects(new Error(errorMessage));

    try {
      await pot2pumpLaunchTool.handler(
        {
          raisedToken: testAsset,
          name: 'testLaunch',
          symbol: 'TEST',
          swapHandler:
            TestnetChainConfig.CONTRACT.HoneypotNonfungiblePositionManager,
        },
        TestnetChainConfig,
        mockWalletClient as any,
      );
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      expect(error.message).to.include(errorMessage);
    }
  });
});
