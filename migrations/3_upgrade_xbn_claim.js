const XBNLocker = artifacts.require("XBNLocker");
// const Utils = artifacts.require("Utils");
const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

module.exports = async function (deployer) {
  
  // const proxyAddress = "0x8781413C768f207699D51f42b909c5d6A9D9aD36"; testnet
  const proxyAddress = "0xafab058b3798d49562fee9d366e293ad881b6968"; //mainnet
  await upgradeProxy(proxyAddress, XBNLocker, {
    deployer
  });
};
