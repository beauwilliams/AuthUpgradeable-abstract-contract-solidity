import * as fs from 'fs';
import { ethers } from "hardhat";
async function main() {
  console.log("deploying token contract");
  const TokenUpgradeable = await ethers.getContractFactory("TokenUpgradeable");
  const token = await upgrades.deployProxy(TokenUpgradeable, { kind: "uups" });
  await token.deployed();
  console.log(`token contract deployed to ${token.address}`)

  console.log('saving contract addresses to cache/deploy.ts');
  let deployments = `
  export const tokenaddress = "${token.address}"
  `

  let data = JSON.stringify(deployments)
  fs.writeFileSync('cache/deploy.ts', JSON.parse(data))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
