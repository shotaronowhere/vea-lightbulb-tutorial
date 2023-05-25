import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import getContractAddress from "../deploy-helpers/getContractAddress";
import * as veaOutboxDevnetGnosis from "@kleros/vea-contracts/deployments/chiado/VeaOutboxArbToGnosisDevnet.json";

const deployLightbulbChiado: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { ethers, deployments } = hre;
  const { deploy } = deployments;
  const { providers } = ethers;

  const deployer = (await hre.ethers.getSigners())[0].address;
  console.log('Deploying L1 Lightbulb on Chiado 💡')

  const senderChainProvider = new providers.JsonRpcProvider(process.env.ARBGOERLI_RPC);

  let nonce = await senderChainProvider.getTransactionCount(deployer) + 1;
  const lightBulbsSwitch = getContractAddress(deployer, nonce);
  const lightbulb = await deploy("Lightbulb", {
    from: deployer,
    contract: "Lightbulb",
    args: [veaOutboxDevnetGnosis.address, lightBulbsSwitch],
    log: true,
  });

  console.log(`deployed to ${lightbulb.address}`)
};

deployLightbulbChiado.skip = async ({ getChainId }) => {
  return Number(await getChainId()) != 10200;
};

export default deployLightbulbChiado;

