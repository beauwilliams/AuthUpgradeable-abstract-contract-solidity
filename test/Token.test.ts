import chai, { expect } from "chai";
import { ethers, upgrades } from 'hardhat';
import { solidity } from "ethereum-waffle";
chai.use(solidity);
import { Signer } from "ethers";
import { TokenUpgradeable, TokenUpgradeableV2, TokenUpgradeable__factory, TokenUpgradeableV2__factory } from "../typechain-types";


describe("Token Deployment Testing", function () {
  let accounts: Signer[];
  let Token: TokenUpgradeable;
  let TokenContractFactory: TokenUpgradeable__factory;
  let TokenV2: TokenUpgradeableV2;
  let TokenContractFactoryV2: TokenUpgradeableV2__factory;
  let owner: any


  beforeEach(async ()=>{
    TokenContractFactory = <TokenUpgradeable__factory>await ethers.getContractFactory("TokenUpgradeable");
    // Token = <TokenUpgradeable>await upgrades.deployProxy(TokenContractFactory, { kind: "uups" });
    Token = <TokenUpgradeable>await upgrades.deployProxy(TokenContractFactory, {
      initializer: "initialize",
    });
    await Token.deployed();
    [owner] = await ethers.getSigners();
  })

  describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await Token.balanceOf(owner.address);
      expect(await Token.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Upgraded Token contract", function () {
    it("Deployment should say upgraded", async function () {
    TokenContractFactoryV2 = <TokenUpgradeableV2__factory>await ethers.getContractFactory("TokenUpgradeableV2");
    TokenV2 = <TokenUpgradeableV2>await upgrades.upgradeProxy(Token, TokenContractFactoryV2);
    expect(Token.address).to.equal(TokenV2.address);
    expect(await TokenV2.exampleUpgrade()).to.equal("upgraded");
    });
  });

});
