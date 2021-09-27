//Import de la librairie web3js
var  Web3  =  require('web3'); 

//Création d'une instance web3 à l'aide d'infura
web3  =  new  Web3(new  Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4c2aef8f0b8d4b19b85e3bef915da9ba'));

var  abi  =  [{"constant":true,"inputs":[],"name":"getEbola","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tipCreator","outputs":[{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];
var  addr  =  "0xe16f391e860420e65c659111c9e1601c0f8e2818";

var  Contract  =  new  web3.eth.Contract(abi, addr);



Contract.methods.getInfo().call().then(console.log);




