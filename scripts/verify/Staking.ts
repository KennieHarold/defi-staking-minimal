import hardhat from "hardhat";

async function main() {
  await hardhat.run("verify:verify", {
    address: process.env.STAKING_ADDRESS,
    contract: "contracts/Staking.sol:Staking",
    constructorArguments: [
      process.env.TEST_TOKEN_ADDRESS,
      process.env.TEST_TOKEN_ADDRESS,
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
