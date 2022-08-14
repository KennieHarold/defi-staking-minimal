import { BigNumber, Signer, Contract } from "ethers";
import { ethers, network } from "hardhat";
import { expect } from "chai";

const SECONDS_IN_A_DAY = 86400;

async function moveBlocks(amount: Number) {
  console.log("Moving blocks...");
  for (let index = 0; index < amount; index++) {
    await network.provider.send("evm_mine", []);
  }
  console.log(`Moved ${amount} blocks.`);
}

async function moveTime(amount: Number) {
  console.log("Moving time...");
  await network.provider.send("evm_increaseTime", [amount]);
  console.log(`Moved forward in time ${amount} seconds.`);
}

describe("Staking Tests", async function () {
  let staking: Contract;
  let testToken: Contract;
  let deployer: Signer;
  let stakeAmount: BigNumber;

  beforeEach(async function () {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];

    const _testToken = await ethers.getContractFactory("TestToken");
    testToken = await _testToken.deploy();

    const _staking = await ethers.getContractFactory("Staking");
    staking = await _staking.deploy(testToken.address, testToken.address);
    stakeAmount = ethers.utils.parseEther("100000");
  });

  it("should be able to stake tokens", async function () {
    await testToken.approve(staking.address, stakeAmount);
    await staking.stake(stakeAmount);

    const deployerAddress = deployer.getAddress();
    const startingEarned = await staking.earned(deployerAddress);

    console.log(`Starting Earned: ${startingEarned}`);

    await moveTime(SECONDS_IN_A_DAY);
    await moveBlocks(1);

    const endingEarned = await staking.earned(deployerAddress);
    console.log(`Ending Earned: ${endingEarned}`);

    expect(startingEarned).to.be.equal(0);
    expect(endingEarned).to.be.equal(8600000);
  });
});
