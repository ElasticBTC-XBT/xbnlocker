pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

// import "./lib/Utils.sol";
import "./lib/iBEP20.sol";


import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract XBNLocker is OwnableUpgradeable{

    using SafeMath for uint;

     function initialize() public initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();
    }

   
    function withdrawErc20(address tokenAddress,uint amount) public onlyOwner {
        IBEP20 _tokenInstance = IBEP20(tokenAddress);
        _tokenInstance.transfer(
            msg.sender,
            amount*10**18
        );
    }
    
    function emergencyBNBWithdraw() public onlyOwner {
        (bool sent,) = (address(msg.sender)).call{value : address(this).balance}("");
        require(sent, 'Error: Cannot withdraw');

    }

}
