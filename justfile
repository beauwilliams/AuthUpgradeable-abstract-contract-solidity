default:
	echo 'Hello, world!'
compile:
	npx hardhat compile
deploy-localhost:
	npx hardhat run --network localhost scripts/deploy.ts
start:
	npx hardhat node
deploy-testnet:
	npx hardhat run scripts/deploy.ts --network ropsten
verify:
	npx hardhat run scripts/verify.ts --network ropsten
test:
	npx hardhat test

