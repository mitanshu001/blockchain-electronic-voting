const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    electionvotin: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\Ashish Ranjan\\Desktop\\blockchain-electronic-voting-master\\try1.env', 'utf-8'), "https://electioncomm.blockchain.azure.com:3200/Do6qs-JCQSH7Xtp71F2rjpsb"),
      consortium_id: 1565777058349
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
};
