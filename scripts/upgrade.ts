import * as fs from 'fs';
import { ethers, upgrades } from 'hardhat';
import { tokenaddress } from '../cache/deploy';

//Specify the existing address of the contract you wish to upgrade here
const CONTRACT_ADDRESS = tokenaddress;
//Specify the name of the contract to be upgraded here.
const CONTRACT_NAME='TokenUpgradeableV2'

async function main() {
  const UpgradedContract = await ethers.getContractFactory(CONTRACT_NAME);
  const token = await upgrades.upgradeProxy(CONTRACT_ADDRESS, UpgradedContract);
  console.log(token.address);

  console.log('saving contract addresses to cache/deploy.ts');
  let deployments = `
  export const tokenaddress = "${token.address}"
  `

  let data = JSON.stringify(deployments)
  fs.writeFileSync('cache/deploy.ts', JSON.parse(data))


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
