#  AuthUpgradeable

A simple solidity smart contract to authorise certain wallets to access certain functions

Compatible with OpenZeppelins upgradeable contracts

Shown here is an example with ERC20Upgradeable token


# Why not just use onlyOwner

You might want to have functions that can be called by authorised wallets, rather than being publicly callable or only by owner.

# Features

- Maintain a list of authorised wallets
- Allow authorised wallets to call functions
- Remove authorisations from list as well as add them
- Retains `onlyOwner` functions while also adding `authorised` functions

# Usage

- Understand upgradeable contracts, UUPS pattern
- Import the AuthUpgradeable.sol file into your smart contract `import "./AuthUpgradeable.sol";`
- add the `is AuthUpgradeable` dependency to your smart contract
- add `authorised` decorator to functions you wish to allow authorised wallets to call

# Disclaimer

Not fully tested. Use at your discretion
