//Récupérer les informations d'un smart contract


//Import de la librairie web3js

var Web3 = require('web3')

//Création d'une instance web3 à l'aide d'infura

web3  =  new  Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/4c2aef8f0b8d4b19b85e3bef915da9ba'));

//Récupération des abi du smart contract

var ABI = [ { "inputs": [ { "internalType": "uint256", "name": "x", "type": "uint256" } ], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "get", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true } ];


//Déclaration de l'address de l'instance déployée du smart contract

var addr = "0xCbd43b4CF42101693689a1f9C201471d8f505E8f";


//Récupération de l'instance du smart contract déployé

var Contract = new web3.eth.Contract(ABI, addr);

//Récupération des fonctions du smart contract

Contract.methods.get().call((err, data) => {
  console.log(data);
});