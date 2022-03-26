import { expect } from 'chai'
import { ethers } from 'hardhat'

let token: any;

describe("Token Deployment Testing", function () {


  beforeEach(async ()=>{
    const TokenUpgradeable = await ethers.getContractFactory("TokenUpgradeable");
    const token = await upgrades.deployProxy(TokenUpgradeable, { kind: "uups" });
    await token.deployed();
  })

  describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
      const [owner] = await ethers.getSigners();

      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });
  });

});
