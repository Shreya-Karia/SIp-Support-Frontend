// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./CreatorNFT.sol";

contract NFTFactory {
    NFT[] public deployedNFTs;

    mapping(address => address[]) public creator;

    function createNewNFT(
        uint256 n,
        string memory imageURL,
        address _address
    ) public {
        NFT newNFT = new NFT(n, imageURL, _address);
        creator[_address].push(address(newNFT));
        deployedNFTs.push(newNFT);
    }

    function getDeployedNFTs() public view returns (NFT[] memory) {
        return deployedNFTs;
    }

    function getCreatorInfo(address _address) public view returns (address[] memory) {
        return creator[_address];
    }

}
