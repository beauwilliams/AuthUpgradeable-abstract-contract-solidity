
const { ethers, upgrades } = require("hardhat");

//Specify the existing address of the contract you wish to upgrade here
const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0342";
//Specify the name of the contract to be upgraded here.
const CONTRACT_NAME='TokenUpgradeableV2'

async function main() {
  const UpgradedContract = await ethers.getContractFactory(CONTRACT_NAME);
  const res = await upgrades.upgradeProxy(CONTRACT_ADDRESS, UpgradedContract);
  console.log(res.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
