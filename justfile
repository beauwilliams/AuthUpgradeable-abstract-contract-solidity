default:
	echo 'Hello, world!'
compile:
	npx hardhat compile
start:
	npx hardhat node
test:
	npx hardhat test
deploy-localhost:
	npx hardhat run --network localhost scripts/deploy.ts
upgrade-localhost:
	npx hardhat run --network localhost scripts/upgrade.ts
deploy-testnet:
	npx hardhat run scripts/deploy.ts --network ropsten
upgrade-testnet:
	npx hardhat run --network testnet scripts/upgrade.ts
verify:
	npx hardhat run scripts/verify.ts --network ropsten

