# Minimalistic Defi Staking App

A minimalistic defi staking app that uses [synthetix.io](https://synthetix.io/) rewards math algorithm. Build using Hardhat and NextJS

Great thanks also to Chainlink for providing an awesome tutorial video. You can check the link below. <br />
[DeFi Staking App: Code Along](https://www.youtube.com/watch?v=-48_hdo9_gg)

Make sure you fill in these environment variables
```shell
INFURA_API_KEY
ADMIN_PK
ETHERSCAN_API_KEY
STAKING_ADDRESS
TEST_TOKEN_ADDRESS

# For NextJS
NEXT_PUBLIC_STAKING_ADDRESS
NEXT_PUBLIC_TEST_TOKEN_ADDRESS
```

To run the project

```shell
npm run dev
```

To deploy the contract
```shell
npx hardhat run ./scripts/deploy/Staking.sol
```

To verify the contract
```shell
npx hardhat run ./scripts/verify/Staking.sol
```

Deployed lottery contract address on BSC Testnet
```shell
STAKING_ADDRESS=0x6CA216Eeb2b178De5B2D53A803a3D813E6165416
TEST_TOKEN_ADDRESS=0x1F33Df997970214D0c562cFC21159207ed4aa629
```