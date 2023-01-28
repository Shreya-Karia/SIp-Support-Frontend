// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.17;

// import "./NFT.sol";

// contract NFTFactory {
    
//     NFT[] public deployedNFTs;

//     function createNewNFT() public {
//         NFT newNFT = new NFT();
//         deployedNFTs.push(newNFT);
//     }

//     function getDeployedNFTs() public view returns (NFT[] memory) {
//         return deployedNFTs;
//     }

// }

// // contract PinataNFT {
// //     string public pinataUrl;
// //     address public nftAddress;

// //     constructor(string memory _pinataUrl, address _nftAddress) {
// //         pinataUrl = _pinataUrl;
// //         nftAddress = _nftAddress;
// //     }
// // }

// // contract PinataNFTFactory {
// //     address[] public deployedPinataNFTs;

// //     function createPinataNFT(string memory _pinataUrl, address _nftAddress) public {
// //         address newPinataNFT = address(new PinataNFT(_pinataUrl, _nftAddress));
// //         deployedPinataNFTs.push(newPinataNFT);
// //     }

// //     function getDeployedPinataNFTs() public view returns (address[] memory) {
// //         return deployedPinataNFTs;
// //     }
// // }
