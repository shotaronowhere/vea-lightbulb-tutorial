import "@nomiclabs/hardhat-ethers";
import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig, task } from "hardhat/config";
import "hardhat-deploy";
import "solidity-coverage";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'

dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {      
            optimizer: {
                enabled: true,
                runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
  },
  networks: {
    // Sender chain ---------------------------------------------------------------------------------
    arbitrumGoerli: {
        chainId: 421613,
        url: process.env.ARBGOERLI_RPC,
        accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        live: true,
        saveDeployments: true,
        companionNetworks: {
            chiado: "chiado",
            goerli: "goerli",
        },
        verify: {
          etherscan: {
            apiKey: process.env.ARBISCAN_API_KEY,
          },
        },
      },
      chiado: {
        chainId: 10200,
        url: "https://rpc.chiadochain.net",
        accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        live: true,
        saveDeployments: true,
        tags: ["staging", "outbox", "layer1"],
        companionNetworks: {
          arbitrumGoerli: "arbitrumGoerli",
        },
        verify: {
          etherscan: {
            apiUrl: "https://blockscout.com/gnosis/chiado",
          },
        },
      },
    // Receiver chain ---------------------------------------------------------------------------------
    goerli: {
    chainId: 5,
    url: process.env.GOERLI_RPC,
    accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    live: true,
    saveDeployments: true,
    companionNetworks: {
        sender: "arbitrumGoerli",
    },
    verify: {
      etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY_FIX,
      },
    }
    },
  },
}

export default config;