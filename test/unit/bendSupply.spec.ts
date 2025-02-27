import { expect } from 'chai';
import { bendSupplyTool } from '../../src/tools/bend/bendSupply';
import * as viemClientModule from '../../src/utils/createViemWalletClient';
import * as helpersModule from '../../src/utils/helpers';
import { parseEther } from 'viem';
import sinon from 'sinon';
import { CONTRACT } from '../../src/constants';
import { BEND_ABI } from '../../src/constants/abis/bendABI';
import { TestnetChainConfig } from '../../src/constants/chain';

const mockWalletClient = {
  account: {
    address: '0x1234567890123456789012345678901234567890',
  },
  chain: {
    id: 1,
  },
  writeContract: sinon.stub(),
};

describe('bendSupply Tool', () => {
  beforeEach(() => {
    mockWalletClient.writeContract.reset();
    sinon
      .stub(viemClientModule, 'createViemWalletClient')
      .returns(mockWalletClient as any);
    sinon
      .stub(helpersModule, 'fetchTokenDecimalsAndParseAmount')
      .resolves(parseEther('100'));
    sinon
      .stub(helpersModule, 'checkAndApproveAllowance')
      .resolves() as sinon.SinonStub;
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should have correct function definition', () => {
    expect(bendSupplyTool.definition.type).to.equal('function');
    expect(bendSupplyTool.definition.function.name).to.equal('bend_supply');
    expect(
      bendSupplyTool.definition.function.parameters.required,
    ).to.deep.equal(['asset', 'amount']);
  });

  it('should successfully supply tokens to Bend', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await bendSupplyTool.handler(
      {
        asset: testAsset,
        amount: testAmount,
      },
      TestnetChainConfig,
      mockWalletClient as any,
    );

    expect(result).to.equal(mockTxHash);
    expect(mockWalletClient.writeContract.calledOnce).to.be.true;
    expect(mockWalletClient.writeContract.firstCall.args[0]).to.deep.equal({
      address: CONTRACT.Bend,
      abi: BEND_ABI,
      functionName: 'supply',
      args: [testAsset, parseEther('100'), mockWalletClient.account.address, 0],
      chain: mockWalletClient.chain,
      account: mockWalletClient.account,
    });
  });

  it('should handle errors during supply', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const errorMessage = 'Supply failed';

    mockWalletClient.writeContract.rejects(new Error(errorMessage));

    try {
      await bendSupplyTool.handler(
        {
          asset: testAsset,
          amount: testAmount,
        },
        TestnetChainConfig,
        mockWalletClient as any,
      );
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      expect(error.message).to.include(errorMessage);
    }
  });

  it('should check and approve allowance before supply', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';

    mockWalletClient.writeContract.resolves(mockTxHash);

    await bendSupplyTool.handler(
      {
        asset: testAsset,
        amount: testAmount,
      },
      TestnetChainConfig,
      mockWalletClient as any,
    );

    expect(
      (helpersModule.checkAndApproveAllowance as sinon.SinonStub).calledOnce,
    ).to.be.true;
    expect(
      (helpersModule.checkAndApproveAllowance as sinon.SinonStub).firstCall
        .args,
    ).to.deep.equal([
      mockWalletClient,
      testAsset,
      CONTRACT.Bend,
      parseEther('100'),
    ]);
  });
});
