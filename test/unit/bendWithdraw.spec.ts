import { expect } from 'chai';
import { bendWithdrawTool } from '../../src/tools/bend/bendWithdraw';
import * as viemClientModule from '../../src/utils/createViemWalletClient';
import * as helpersModule from '../../src/utils/helpers';
import { parseEther } from 'viem';
import sinon from 'sinon';
import { CONTRACT, TOKEN } from '../../src/constants';
import { BEND_ABI } from '../../src/constants/bendABI';

const mockWalletClient = {
  account: {
    address: '0x1234567890123456789012345678901234567890',
  },
  writeContract: sinon.stub(),
};

describe('bendWithdraw Tool', () => {
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
    expect(bendWithdrawTool.definition.type).to.equal('function');
    expect(bendWithdrawTool.definition.function.name).to.equal('bend_withdraw');
    expect(
      bendWithdrawTool.definition.function.parameters.required,
    ).to.deep.equal(['asset', 'amount']);
  });

  it('should successfully withdraw tokens from Bend', async () => {
    const testAsset = TOKEN.HONEY;
    const testAmount = 100;
    const mockTxHash = '0xmocktxhash';

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await bendWithdrawTool.handler(
      {
        asset: testAsset,
        amount: testAmount,
      },
      mockWalletClient as any,
    );

    expect(result).to.equal(mockTxHash);
    expect(mockWalletClient.writeContract.calledOnce).to.be.true;
    expect(mockWalletClient.writeContract.firstCall.args[0]).to.deep.include({
      address: CONTRACT.Bend,
      abi: BEND_ABI,
      functionName: 'withdraw',
    });

    const callArgs = mockWalletClient.writeContract.firstCall.args[0].args;
    expect(callArgs[0]).to.equal(testAsset);
    expect(callArgs[1]).to.equal(parseEther('100'));
    expect(callArgs[2]).to.equal(mockWalletClient.account.address);
  });

  it('should handle errors during withdrawal', async () => {
    const testAsset = TOKEN.HONEY;
    const testAmount = 100;
    const errorMessage = 'Withdrawal failed';

    mockWalletClient.writeContract.rejects(new Error(errorMessage));

    try {
      await bendWithdrawTool.handler(
        {
          asset: testAsset,
          amount: testAmount,
        },
        mockWalletClient as any,
      );
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      expect(error.message).to.include(errorMessage);
    }
  });
});
