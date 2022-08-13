import { ethers } from "hardhat";

async function main() {
  const TestToken = await ethers.getContractFactory("TestToken");
  const testToken = await TestToken.deploy();
  await testToken.deployed();

  console.log("TestToken contract deployed to:", testToken.address);

  const Staking = await ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(testToken.address, testToken.address);
  await staking.deployed();

  console.log("Staking contract deployed to:", staking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
