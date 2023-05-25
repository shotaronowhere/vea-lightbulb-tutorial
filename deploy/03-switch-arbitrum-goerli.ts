import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import * as veaInboxDevnetEthereum from "@kleros/vea-contracts/deployments/arbitrumGoerli/VeaInboxArbToEthDevnet.json";

const deploySwitches: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments } = hre;
  const { deploy } = deployments;
  const deployer = (await hre.ethers.getSigners())[0].address;

  const LightBulbGoerli = await hre.companionNetworks.goerli.deployments.get("Lightbulb");
  console.log('Deploying Arbitrum Goerli L2 Switch 🎚️ For Goerli Lightbulb 💡')

  const switchToGoerli = await deploy("SwitchArbitrumGoerliToGoerli", {
    from: deployer,
    contract: "Switch",
    args: [veaInboxDevnetEthereum.address, LightBulbGoerli.address],
    log: true,
  });

  console.log("Switch deployed to: %s", switchToGoerli.address);
  
};

deploySwitches.skip = async ({ getChainId }) => {
  return Number(await getChainId()) != 421613;
};
deploySwitches.runAtTheEnd = true;
deploySwitches.tags = ["switch-to-goerli"];

export default deploySwitches;