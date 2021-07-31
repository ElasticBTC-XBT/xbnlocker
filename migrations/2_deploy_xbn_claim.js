const XBNLocker = artifacts.require("XBNLocker");
// const Utils = artifacts.require("Utils");
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

module.exports = async function (deployer) {
  // await deployer.deploy(Utils);
  // await deployer.link(Utils, AIStaking);

  await deployProxy(
    XBNLocker,
    [], // initialize params
    {
      deployer,
   //   unsafeAllow: ["external-library-linking"],
      initializer: "initialize",
    }
  );
};
