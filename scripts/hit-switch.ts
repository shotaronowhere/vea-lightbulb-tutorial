import { providers, Wallet } from 'ethers'
const { BigNumber } = require('@ethersproject/bignumber')
import * as dotenv from "dotenv";
import {Switch, Switch__factory, Lightbulb} from '../typechain-types/'
const switchDeployment = require('../deployments/arbitrumGoerli/SwitchArbitrumGoerliToGoerli.json')
dotenv.config();

const envVars = ['PRIVATE_KEY', 'GOERLI_RPC', 'ARBGOERLI_RPC'];

for (const envVar of envVars) {
  if (!process.env[envVar]) {
    throw new Error(`Error: set your '${envVar}' environmental variable `)
  }
}
console.log('Environmental variables properly set 👍')

  /**
 * Set up: instantiate L1 / L2 wallets connected to providers
 */

const l2ProviderArbGoerli = new providers.JsonRpcProvider(process.env.ARBGOERLI_RPC)

const main = async () => {

  const switchContract = Switch__factory.connect(switchDeployment.address, new Wallet(process.env.PRIVATE_KEY!, l2ProviderArbGoerli));
  const switchTxn = await switchContract.turnOnLightBulb();
  await switchTxn.wait()
  console.log('Switch hit 🎚️: ', switchTxn.hash)

  const timeNow = Math.floor(Date.now()/1000)
  const eta = Math.ceil((timeNow / 1800))*1800 - timeNow + 60;
  console.log(`Waiting for Vea Devnet to Bridge Message. ETA ~ ${Math.floor(eta/60)} min ${eta % 60} seconds`)
  await delay(eta*1000)
  // TODO Proof Relay
  }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}  