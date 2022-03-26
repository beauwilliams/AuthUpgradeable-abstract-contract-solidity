// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "../access-upgradeable/AuthUpgradeable.sol";

/**
 * @title Upgradeable ERC20 Token Contract
 * @author Beau Williams (@beauwilliams)
 * @dev Smart contract for Token
 */


contract TokenUpgradeable is Initializable, UUPSUpgradeable, ERC20Upgradeable, AuthUpgradeable {
    function initialize() initializer public {
      __UUPSUpgradeable_init();
      __AuthUpgradeable_init();
      __ERC20_init("TokenUpgradeable", "TKU");
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {
        initialize();
    }

    function _authorizeUpgrade(address) internal override authorised {}

}
