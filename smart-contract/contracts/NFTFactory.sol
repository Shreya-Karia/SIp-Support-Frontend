// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./NFT.sol";

contract NFTFactory {
    
    NFT[] public deployedNFTs;

    mapping(string => string) public creator;

    function createNewNFT() public {
        NFT newNFT = new NFT(5,"",0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
        creator[newNFT.name()] = "Matic";
        deployedNFTs.push(newNFT);
    }

    function getDeployedNFTs() public view returns (NFT[] memory) {
        return deployedNFTs;
    }

    function getCreator(string memory _name) public view returns (string memory) {
        return creator[_name];
    }

    function getCreatorInfo(string memory _name) public view returns (string memory, string memory) {
        return (_name, creator[_name]);
    }

    

}