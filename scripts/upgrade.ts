import { ethers, upgrades } from 'hardhat';
import { tokenaddress } from '../cache/deploy';

//Specify the existing address of the contract you wish to upgrade here
const CONTRACT_ADDRESS = tokenaddress;
//Specify the name of the contract to be upgraded here.
const CONTRACT_NAME='TokenUpgradeableV2'

async function main() {
  const UpgradedContract = await ethers.getContractFactory(CONTRACT_NAME);
  try {
    await upgrades.upgradeProxy(CONTRACT_ADDRESS, UpgradedContract);
    console.log('upgraded successfully');
  } catch (e) {
    console.log(e);
  }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
