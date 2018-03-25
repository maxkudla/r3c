const Eth = require('ethjs');
const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'));

export default eth;

