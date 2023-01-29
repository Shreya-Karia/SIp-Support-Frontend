const hre = require("hardhat");

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFT");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("NFT deployed to:", nftMarket.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});