import { expect } from "chai";
import { pot2pumpDepositTool } from "../../../src/tools/honeypotFinance/pot2pumpDeposit";
import * as viemClientModule from "../../../src/utils/createViemWalletClient";
import * as helpersModule from "../../../src/utils/helpers";
import { parseEther } from "viem";
import sinon from "sinon";
import { CONTRACT, TOKEN } from "../../../src/constants";
import { pot2pumpFacadeABI } from "../../../src/constants/honeypotFinanceABI";

const mockWalletClient = {
  account: {
    address: '0x1234567890123456789012345678901234567890',
  },
  chain: {
    id: 1,
  },
  writeContract: sinon.stub(),
};

describe("pot2pumpDeposit Tool", () => {
  beforeEach(() => {
    mockWalletClient.writeContract.reset();
    sinon
      .stub(viemClientModule, "createViemWalletClient")
      .returns(mockWalletClient as any);
    sinon
      .stub(helpersModule, 'fetchTokenDecimalsAndParseAmount')
      .resolves(parseEther('100'));
    sinon.stub(helpersModule, 'checkAndApproveAllowance').resolves();
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should have correct function definition", () => {
    expect(pot2pumpDepositTool.definition.type).to.equal("function");
    expect(pot2pumpDepositTool.definition.function.name).to.equal("deposit");
    expect(
      pot2pumpDepositTool.definition.function.parameters.required,
    ).to.deep.equal(["launchedToken", "raisedToken", "raisedTokenAmount"]);
  });

  it("should successfully deposit into pot2pump project", async () => {
    const testRaisedToken = TOKEN.HONEY;
    const testLaunchedToken = TOKEN.IBGT;
    const mockTxHash = "0xmocktxhash";

    mockWalletClient.writeContract.resolves(mockTxHash);

    const result = await pot2pumpDepositTool.handler(
      {
        launchedToken: testLaunchedToken,
        raisedToken: testRaisedToken,
        raisedTokenAmount: 100,
      },
      mockWalletClient as any,
    );

    expect(result).to.equal(mockTxHash);
    expect(mockWalletClient.writeContract.calledOnce).to.be.true;
    expect(mockWalletClient.writeContract.firstCall.args[0]).to.deep.equal({
      address: CONTRACT.Pot2PumpFacade,
      abi: pot2pumpFacadeABI,
      functionName: 'deposit',
      args: [testLaunchedToken, parseEther('100')],
      chain: mockWalletClient.chain,
      account: mockWalletClient.account,
    });
  });

  it("should handle errors during pot2pump deposit", async () => {
    const testLaunchedToken = TOKEN.IBGT;
    const testRaisedToken = TOKEN.HONEY;
    const errorMessage = "Pot2Pump deposit failed";

    mockWalletClient.writeContract.rejects(new Error(errorMessage));

    try {
      await pot2pumpDepositTool.handler(
        {
          launchedToken: testLaunchedToken,
          raisedToken: testRaisedToken,
          raisedTokenAmount: 100,
        },
        mockWalletClient as any,
      );
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).to.include(errorMessage);
    }
  });
});