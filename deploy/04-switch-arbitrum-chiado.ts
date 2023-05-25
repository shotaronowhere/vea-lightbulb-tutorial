import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import * as veaInboxDevnetGnosis from "@kleros/vea-contracts/deployments/arbitrumGoerli/VeaInboxArbToEthDevnet.json";

const deploySwitches: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments,  } = hre;
  const { deploy } = deployments;
  const deployer = (await hre.ethers.getSigners())[0].address;

  console.log('Deploying Arbitrum Goerli L2 Switch 🎚️ For Chiado Lightbulb 💡')

  const LightBulbChiado = await hre.companionNetworks.chiado.deployments.get("Lightbulb");
  const switchToChiado = await deploy("SwitchArbitrumGoerliToChiado", {
    from: deployer,
    contract: "Switch",
    args: [veaInboxDevnetGnosis.address, LightBulbChiado.address],
    log: true,
  });

  console.log("Switch deployed to: %s", switchToChiado.address);
};

deploySwitches.skip = async ({ getChainId }) => {
  return Number(await getChainId()) != 421613;
};
deploySwitches.runAtTheEnd = true;
deploySwitches.tags = ["switch-to-chiado"];

export default deploySwitches;