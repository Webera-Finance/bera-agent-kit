import { expect } from 'chai';
import { bendBorrowTool } from '../../src/tools/bend/bendBorrow';
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

describe('bendBorrow Tool', () => {
  beforeEach(() => {
    mockWalletClient.writeContract.reset();
    sinon
      .stub(viemClientModule, 'createViemWalletClient')
      .returns(mockWalletClient as any);
    sinon
      .stub(helpersModule, 'fetchTokenDecimalsAndParseAmount')
      .resolves(parseEther('100'));
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should have correct function definition', () => {
    expect(bendBorrowTool.definition.type).to.equal('function');
    expect(bendBorrowTool.definition.function.name).to.equal('bend_borrow');
    expect(
      bendBorrowTool.definition.function.parameters.required,
    ).to.deep.equal(['asset', 'amount']);
  });

  it('should successfully borrow tokens from Bend with default interest rate', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await bendBorrowTool.handler(
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
      functionName: 'borrow',
      args: [
        testAsset,
        parseEther('100'),
        BigInt(2), // Default variable rate
        0, // referralCode
        mockWalletClient.account.address,
      ],
      chain: mockWalletClient.chain,
      account: mockWalletClient.account,
    });
  });

  it('should successfully borrow tokens with stable interest rate', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';
    const stableRateMode = 1;

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await bendBorrowTool.handler(
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
      functionName: 'borrow',
      args: [
        testAsset,
        parseEther('100'),
        BigInt(stableRateMode),
        0, // referralCode
        mockWalletClient.account.address,
      ],
      chain: mockWalletClient.chain,
      account: mockWalletClient.account,
    });
  });

  it('should handle errors during borrow', async () => {
    const testAsset = TestnetChainConfig.TOKEN.HONEY;
    const testAmount = 100;
    const errorMessage = 'Borrow failed';

    mockWalletClient.writeContract.rejects(new Error(errorMessage));

    try {
      await bendBorrowTool.handler(
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
