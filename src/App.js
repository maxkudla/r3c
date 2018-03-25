import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Tx from 'ethereumjs-tx';
import Web3 from 'web3';

// import eth from './eth';

const web3  = new Web3(window.web3.currentProvider);

//web3.setProvider(new web3.providers.HttpProvider());


// const Balance = ({value}) => value ? (
//     <h1>{value.toString()/10000}</h1>
// ) : null;


// the abi
const abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseApproval",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "_spender",
            "type": "address"
        },
            {
                "name": "_addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseApproval",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];

const address = "0x5ffa06b7e9d4a581839997e9c5100003793b61ef";
const gate = "0xbbe86c2ac8913c89f9a5c460caad0a68a6ce486a";

// const contract = web3.eth.contract(abi, address);

//
// const Contract = eth.contract(abi)
//
// const contract = Contract.at(address);

const Contract = web3.eth.contract(abi);
const contract = Contract.at(address);


// var privateKey = new Buffer('6724101b4cb2ff99df9bb36c8fde93d4e81f544020a2829534bd2eee65ae5b53', 'hex')

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            balance: null
        }
    }

    componentDidMount() {
        web3.eth.defaultAccount = this.context.web3.selectedAccount;

        contract.balanceOf(this.context.web3.selectedAccount, (err, balance) => {
            this.setState({balance})
        });

    }


    handleSendTransaction = () => {


        // var rawTx = {
        //     nonce: '0x00',
        //     gasPrice: '0x09184e72a000',
        //     gasLimit: '0x2710',
        //     to: '0x0000000000000000000000000000000000000000',
        //     value: '0x00',
        //     data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
        // }
        //
        // var tx = new Tx(rawTx);
        // tx.sign(privateKey);
        //
        // var serializedTx = tx.serialize();
        //
        // web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
        //     if (!err)
        //         console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
        // });

        // web3.eth.sendTransaction({
        //     //from: this.context.web3.selectedAccount,
        //     to: '0x6e0E0e02377Bc1d90E8a7c21f12BA385C2C35f78',
        //     from: address,
        //     value: '4500',
        //     //gas: '3000000',
        //     //data: '0x',
        // })
        //
        //     .then((result) => {
        //         console.info(result)
        //         /*
        //         // result
        //
        //         "0xbf2b4596cbd1511f4a6ef8af06d03354f53cb8aa9508a6810b6f93d8bccbabd40cb8da3"
        //         */
        //     })
        //     .catch((error) => {
        //         console.info(error)
        //         // null
        //     });

        contract.approve(gate, 1, (result) => {
            console.log("asdfasdf")
            this.setState({
                modal: true
            }, () => {
                setTimeout(()=>{
                    this.setState({
                        relax: true
                    })
                }, 2000)
            })
        })

    }


    render() {
        return (
            <div style={{textAlign: "center", marginBottom: "20%"}}>
                <h1>SWAP YOUR TOKENS</h1>
                {
                    this.state.balance && (
                        <h3>You have { this.state.balance.toString()/10000} REM</h3>
                    )
                }

                <label htmlFor="input" id="label">Enter your Remme address</label>
                <input type="text" id="input" placeholder="Remme address"/>

                <label htmlFor="input" id="label">How mach you would like to swap?</label>
                <input type="text" id="input" />
                <button id="button" onClick={this.handleSendTransaction}>GO!</button>

                {
                    this.state.modal && (
                        <div className="modal" >
                            <div className="modal-body">
                                <h1>Congratulation!</h1>
                                {
                                    this.state.relax ? (
                                        <div>
                                            <h3>Relax! It was joke!</h3>
                                            <h4>Just check your wallet!</h4>
                                        </div>
                                    ) : (
                                        <div>
                                            <h3>You've lost your tokens</h3>
                                            <h4>Ahahahahahah</h4>
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

App.contextTypes = {
    web3: PropTypes.object
};

export default App;
