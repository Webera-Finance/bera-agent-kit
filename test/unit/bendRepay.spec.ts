import { expect } from 'chai';
import { bendRepayTool } from '../../src/tools/bend/bendRepay';
import * as viemClientModule from '../../src/utils/createViemWalletClient';
import * as helpersModule from '../../src/utils/helpers';
import { parseEther } from 'viem';
import sinon from 'sinon';
import { CONTRACT, TOKEN } from '../../src/constants';
import { BEND_ABI } from '../../src/constants/bendABI';
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

describe('bendRepay Tool', () => {
  beforeEach(() => {
    mockWalletClient.writeContract.reset();
    sinon
      .stub(viemClientModule, 'createViemWalletClient')
      .returns(mockWalletClient as any);
    sinon
      .stub(helpersModule, 'fetchTokenDecimalsAndParseAmount')
      .resolves(parseEther('100'));
    sinon.stub(helpersModule, 'checkAndApproveAllowance').resolves();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should have correct function definition', () => {
    expect(bendRepayTool.definition.type).to.equal('function');
    expect(bendRepayTool.definition.function.name).to.equal('bend_repay');
    expect(bendRepayTool.definition.function.parameters.required).to.deep.equal(
      ['asset', 'amount'],
    );
  });

  it('should successfully repay tokens to Bend with default interest rate', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await bendRepayTool.handler(
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
      address: TestnetChainConfig.CONTRACT.Bend,
      abi: BEND_ABI,
      functionName: 'repay',
      args: [
        testAsset,
        parseEther('100'),
        BigInt(2), // Default variable rate
        mockWalletClient.account.address,
      ],
      chain: mockWalletClient.chain,
      account: mockWalletClient.account,
    });
  });

  it('should successfully repay tokens with stable interest rate', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';
    const stableRateMode = 1;

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await bendRepayTool.handler(
      {
        asset: testAsset,
        amount: testAmount,
        interestRateMode: stableRateMode,
      },
      TestnetChainConfig,
      mockWalletClient as any,
    );

    expect(result).to.equal(mockTxHash);
    expect(mockWalletClient.writeContract.calledOnce).to.be.true;
    expect(mockWalletClient.writeContract.firstCall.args[0]).to.deep.equal({
      address: TestnetChainConfig.CONTRACT.Bend,
      abi: BEND_ABI,
      functionName: 'repay',
      args: [
        testAsset,
        parseEther('100'),
        BigInt(stableRateMode),
        mockWalletClient.account.address,
      ],
      chain: mockWalletClient.chain,
      account: mockWalletClient.account,
    });
  });

  it('should check and approve allowance before repay', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';

    mockWalletClient.writeContract.resolves(mockTxHash);

    await bendRepayTool.handler(
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

  it('should handle errors during repay', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const errorMessage = 'Repay failed';

    mockWalletClient.writeContract.rejects(new Error(errorMessage));

    try {
      await bendRepayTool.handler(
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
});
