import { expect } from 'chai';
import { getBalanceTool } from '../../src/tools/common/getBalance';
import * as viemClientModule from '../../src/utils/createViemPublicClient';
import { parseEther } from 'viem';
import sinon from 'sinon';
import { TestnetChainConfig } from '../../src/constants/chain';

const mockPublicClient = {
  getBalance: sinon.stub(),
};

describe('getBalance Tool', () => {
  beforeEach(() => {
    mockPublicClient.getBalance.reset();
    sinon
      .stub(viemClientModule, 'createViemPublicClient')
      .returns(mockPublicClient as any);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should have correct function definition', () => {
    expect(getBalanceTool.definition.type).to.equal('function');
    expect(getBalanceTool.definition.function.name).to.equal('get_balance');
    // Wallet is optional, can check from embeded wallet client
    expect(
      getBalanceTool.definition.function.parameters.required,
    ).to.deep.equal([]);
  });

  it('should return formatted balance for valid wallet address', async () => {
    const testWallet = '0x1234567890123456789012345678901234567890';
    const mockBalance = parseEther('1.5');

    mockPublicClient.getBalance.resolves(mockBalance);

    const result = await getBalanceTool.handler(
      { wallet: testWallet },
      TestnetChainConfig,
    );

    expect(result).to.equal('1.5');
    expect(mockPublicClient.getBalance.calledOnce).to.be.true;
    expect(mockPublicClient.getBalance.firstCall.args[0]).to.deep.equal({
      address: testWallet,
    });
  });

  it('should handle zero balance', async () => {
    const testWallet = '0x1234567890123456789012345678901234567890';
    const mockBalance = parseEther('0');

    mockPublicClient.getBalance.resolves(mockBalance);

    const result = await getBalanceTool.handler(
      { wallet: testWallet },
      TestnetChainConfig,
    );

    expect(result).to.equal('0');
  });
});
