import { Wallet } from "ethers";
import VeaSdk from "@kleros/vea-sdk";
import envVar from "@kleros/vea-sdk/dist/utils/envVar";
import { Switch, Switch__factory, Lightbulb } from "../typechain-types/";
const switchDeployment = require("../deployments/arbitrumGoerli/SwitchArbitrumGoerliToGoerli.json");

const vea = VeaSdk.ClientFactory.arbitrumGoerliToChiadoDevnet(
  envVar("ARBGOERLI_RPC"),
  envVar("GOERLI_RPC")
);
const privateKey = envVar("PRIVATE_KEY");
console.log('Environmental variables properly set 👍')

/**
 * Set up: instantiate L1 / L2 wallets connected to providers
 */
const main = async () => {
  const wallet = new Wallet(privateKey, vea.outboxProvider);
  const switchContract = Switch__factory.connect(
    switchDeployment.address,
    wallet
  );
  const switchTxn = await switchContract.turnOnLightBulb();
  await switchTxn.wait();
  console.log("Switch hit 🎚️: ", switchTxn.hash);

  const timeNow = Math.floor(Date.now() / 1000);
  const eta = Math.ceil(timeNow / 1800) * 1800 - timeNow + 60;
  console.log(
    `Waiting for Vea Devnet to Bridge Message. ETA ~ ${Math.floor(
      eta / 60
    )} min ${eta % 60} seconds`
  );
  await delay(eta * 1000);

  const logs = await switchContract.queryFilter(switchContract.filters.lightBulbToggled(), switchTxn.blockNumber, switchTxn.blockNumber);
  const messageId = logs[0].args.messageId.toNumber();
  console.log(`Message ID: ${messageId}`);

  // Get the message proof and data
  const messageInfo = await vea.getMessageInfo(messageId);

  // Relay the message
  await vea.relay(messageInfo, wallet);
  console.log(`Message ID ${messageId} relayed ✅`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
