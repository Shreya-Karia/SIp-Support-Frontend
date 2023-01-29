// pragma solidity ^0.8.0;
// import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

// contract MyNFT is ERC721 {
//     // counter to keep track of sold NFTs
//     uint256 public totalSold;
//     // mapping of supporters and their wallet addresses
//     mapping(address => bool) public supporters;
//     // array to store information on whether NFTs have been sold or not
//     bool[] public sold;
//     // array to store information on TokenId and Wallet address that sold by it
//     mapping(uint256 => address) public tokenSeller;
//     // constructor
//     constructor() public {
//         totalSold = 0;
//     }
//     // function to mint multiple NFTs
//     function batchMint(uint256 n, string memory imageURL, address _address) public {
//         for (uint256 i = 0; i < n; i++) {
//             _mint(msg.sender, i, imageURL);
//             sold[i] = false;
//         }
//     }
//     // function for tranfering ownership of one of the NFT want to sell NFT's in sequence. we can use tokenID for that
//     function transferFrom(address to, uint256 tokenId) public {
//         require(!sold[tokenId]);
//         _transferFrom(msg.sender, to, tokenId);
//         sold[tokenId] = true;
//         tokenSeller[tokenId] = msg.sender;
//         totalSold++;
//     }

//     // function that can check a perticular wallet is supporter or not
//     function isSupporter(address _address) public view returns (bool) {
//         return supporters[_address];
//     }

// }
