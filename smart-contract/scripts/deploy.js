const hre = require("hardhat");

async function main() {
  const CreatorNFT = await hre.ethers.getContractFactory("CreatorNFT");
  const creatorNFT = await CreatorNFT.deploy();
  await creatorNFT.deployed();
  console.log("CreatorNFT deployed to:", creatorNFT.address);

  const Factory = await hre.ethers.getContractFactory("Factory");
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log("Factory deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});