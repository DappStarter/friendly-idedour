require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember clutch grace casino tail tornado'; 
let testAccounts = [
"0xbe7861fd793f90111b134b2b5dc1c73e47c3f48cf841ea1c629c079a69106cc8",
"0xba311d060d3fa81e211c8e602c3e5b85b8f74bd5481efad679ca3af28c62bbb6",
"0x2f4441b8a44f995f957027b99039e293dd30ac489a1d56f20bc5eaa712f4911f",
"0xdca0d82a97266240496f4f41120bdc592472b1ce07b5f44bc6a2533316754683",
"0x9373e11e9fcb67f7c989b8993077654ee269f0cc9cac9b75cbdc824e053655c2",
"0xc3180c26bc60795cddf8d35b1103daddd2702ada77f2632748e94b000a8009c7",
"0x136707bcaf8090b2fe21d1e1228f5bde189eb55f4a4a1152d6e356b382aeb06d",
"0xfad00fba423c734f651dfc1a0a883a8093a7806c4977f4e7dc22c9f6a312ea2b",
"0xe8c14aadf5caa703dd09f843d3d996a9f18a136677ca72c4280cd8162e7de734",
"0xe1fae55ad1507df8761d52da79dcb58a0587b1ffb111dcaa05878c4d312d33ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
