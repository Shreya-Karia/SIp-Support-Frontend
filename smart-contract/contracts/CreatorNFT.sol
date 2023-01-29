// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    uint256 public totalSold;
    mapping(address => bool) public supporters;
    mapping(uint256 => address) public tokenSeller;
    mapping(uint256 => bool) public sold;

    struct NFTItem {
        address nftContract;
        uint256 tokenId;
        address seller;
        address owner;
        uint256 price;
        bool sold;
    }

    address initialAddress;

    mapping(uint256 => NFTItem) private idNFTItem;

    event NFTItemCreated(
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    constructor(uint256 n,
        string memory imageURL,
        address _address) ERC721("Support", "MATICC") {
        totalSold = 0;
        for (uint256 i = 0; i < n; i++) {
            safeMint(_address,imageURL);
            sold[i] = false;
            idNFTItem[i] = NFTItem(
                address(this),
                i,
                _address,
                _address,
                0,
                false
            );
        }
        initialAddress = _address;
    }

    function batchMint(
        uint256 n,
        string memory imageURL,
        address _address
    ) public {
        for (uint256 i = 0; i < n; i++) {
            safeMint(_address,imageURL);
            sold[i] = false;
            idNFTItem[i] = NFTItem(
                address(this),
                i,
                _address,
                _address,
                0,
                false
            );
        }
        initialAddress = _address;
    }

    function transferFrom(address to, uint256 tokenId) public {
        require(!sold[tokenId]);
        _transfer(msg.sender, to, tokenId);
        sold[tokenId] = true;
        tokenSeller[tokenId] = msg.sender;
        idNFTItem[tokenId].owner = to;
        totalSold++;
    }

    function safeMint(address to, string memory URI) public returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, URI);

        return tokenId;
    }

    function isSupporter(address _address) public view returns (bool) {
        return supporters[_address];
    }

    function fetchNFTItems() public view returns (NFTItem[] memory) {
        uint256 itemCount = _tokenIdCounter.current();
        uint256 unsoldItemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < itemCount; i++) {
            if (idNFTItem[i + 1].owner == initialAddress) {
                unsoldItemCount++;
            }
        }

        NFTItem[] memory items = new NFTItem[](unsoldItemCount);

        for (uint256 i = 0; i < itemCount; i++) {
            if (idNFTItem[i + 1].owner == initialAddress) {
                uint256 currentId = i + 1;
                NFTItem storage currentItem = idNFTItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }

        return items;
    }

    // return address(this);

}