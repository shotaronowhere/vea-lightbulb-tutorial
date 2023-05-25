import { providers, Wallet } from 'ethers'
const { BigNumber } = require('@ethersproject/bignumber')
const hre = require('hardhat')
const ethers = require('ethers')
import * as dotenv from "dotenv";
import * as veaOutboxDevnetEthereum from "@kleros/vea-contracts/deployments/goerli/VeaOutboxArbToEthDevnet.json";
import * as veaInboxDevnetEthereum from "@kleros/vea-contracts/deployments/arbitrumGoerli/VeaInboxArbToEthDevnet.json";
const getContractAddress = require("./util/getContractAddress");

dotenv.config();

const envVars = ['PRIVATE_KEY', 'GOERLI_RPC', 'CHIADO_RPC', 'ARBGOERLI_RPC'];

for (const envVar of envVars) {
  if (!process.env[envVar]) {
    throw new Error(`Error: set your '${envVar}' environmental variable `)
  }
}
console.log('Environmental variables properly set 👍')

  /**
 * Set up: instantiate L1 / L2 wallets connected to providers
 */
const walletPrivateKey = process.env.DEVNET_PRIVKEY

const l1ProviderGoerli = new providers.JsonRpcProvider(process.env.GOERLI_RPC)
const l2ProviderArbGoerli = new providers.JsonRpcProvider(process.env.ARBGOERLI_RPC)

const l1WalletGoerli = new Wallet(process.env.PRIVATE_KEY!, l1ProviderGoerli)
const l2WalletArbGoerli = new Wallet(process.env.PRIVATE_KEY!, l2ProviderArbGoerli)

const main = async () => {

  const updateL2Tx = await switchArbGoerliToGoerli.turnOnLightBulb()
  await updateL2Tx.wait()
  console.log('Switch hit 🎚️: ', updateL2Tx.hash)

  }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
