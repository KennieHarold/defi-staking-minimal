declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_PK: string;
      INFURA_API_KEY: string;
      ETHERSCAN_API_KEY: string;
      STAKING_ADDRESS: string;
      TEST_TOKEN_ADDRESS: string;
    }
  }
}

export {};
