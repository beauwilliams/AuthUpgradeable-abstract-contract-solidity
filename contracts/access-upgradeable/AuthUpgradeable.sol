// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Auth Contract
 * @author Beau Williams (@beauwilliams)
 * @dev Smart contract for Auth controls
 */

abstract contract AuthUpgradeable is UUPSUpgradeable{
    address owner;
    mapping (address => bool) private authorisations;

    /**
    * @dev Initializes the contract setting the deployer as the initial owner.
    */
    function __AuthUpgradeable_init() internal onlyInitializing {
        __AuthUpgradeable_init_unchained();
    }

    /**
    * @dev See: https://docs.openzeppelin.com/contracts/4.x/upgradeable#multiple-inheritance
    */
    function __AuthUpgradeable_init_unchained() internal onlyInitializing {
        owner = msg.sender;
        authorisations[msg.sender] = true;
      __UUPSUpgradeable_init();
    }

    modifier onlyOwner() {
        require(isOwner(msg.sender)); _;
    }

    modifier authorised() {
        require(isAuthorised(msg.sender)); _;
    }

    function authorise(address adr) public onlyOwner {
        authorisations[adr] = true;
        emit Authorised(adr);
    }

    function unauthorise(address adr) public onlyOwner {
        authorisations[adr] = false;
        emit Unauthorised(adr);
    }

    function isOwner(address account) public view returns (bool) {
        return account == owner;
    }

    function isAuthorised(address adr) public view returns (bool) {
        return authorisations[adr];
    }

    function transferOwnership(address newOwner) public onlyOwner {
        address oldOwner = owner;
        owner = newOwner;
        authorisations[oldOwner] = false;
        authorisations[newOwner] = true;
        emit Unauthorised(oldOwner);
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    event OwnershipTransferred(address oldOwner, address newOwner);
    event Authorised(address adr);
    event Unauthorised(address adr);


    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    uint256[49] private __gap;
}
