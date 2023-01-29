require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {},

    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/jAKzYyOpCEpKTn1cWzusU4oakrZxsVer",
      accounts: [
        `f8199f89f18b5dfcdfd45bb0893fce783b23e10cfd065f144ff6392efc5df377`,
      ],
    },
  },
  solidity: "0.8.17",
};
