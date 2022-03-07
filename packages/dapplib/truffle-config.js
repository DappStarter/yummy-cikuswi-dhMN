require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture stomach regret punch purpose jazz end army genre'; 
let testAccounts = [
"0xdfb8271d142f5e4e12dcb957395638c6de3e62d3b56d0680a882c80c4d4fc68d",
"0xf5e673c2d68a23424b47eddbd997292170e4426069c061d624809556c477131f",
"0x747c5dab75fa4b404f29ae98aa3457c2147ddac299661132f592f8d40093f06b",
"0x871662e1f3f31a9d330f29b50b2486c957d30584a3ff3bbe8ad6ebf063585bb5",
"0x44b086531f2dc1a79a8a46e9955e1de5d5e44d584d2073a93590adcc8aacfc97",
"0x9cb8acf83a77abdf3573d3945c7c9ec03d803f1581d55c7df4034b1e4bc9d535",
"0x8c498b1b35ae519af50f6dd926724797f62e71298e899a5c7e58eb82a3d7aebf",
"0xdd36d9e5fcd1593c5ef4c92220582708422eeb061e1346631187d988d394c19b",
"0x68f0f8f6b1de17228f52d5c1c69972cf7cfc81b46d3a1c879b5b692b241caed3",
"0x99ede345935ed01696830b5ad778617fb1745c4600312c0f75376ae54990f278"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

