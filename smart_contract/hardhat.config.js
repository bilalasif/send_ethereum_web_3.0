//https://eth-ropsten.alchemyapi.io/v2/wEQLFBxAW1iYXTgxmk1_RuynKhlONL4o
require('@nomiclabs/hardhat-waffle')
module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/wEQLFBxAW1iYXTgxmk1_RuynKhlONL4o',
            accounts: ['de22ef11f196a86ca75633bcab51682b092838498a2dd08bcfb028cd1462755b']
        }
    }
}