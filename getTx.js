var  Web3  =  require('web3'); 
web3  =  new  Web3(new  Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4c2aef8f0b8d4b19b85e3bef915da9ba'));

var  ethTx  = ('0xb7107be925b0877c13827b27e01a6537764c397725f22a95e9e5236fad61fdb6');

web3.eth.getTransaction(ethTx, function(err, result) { 

if (!err  &&  result  !==  null) {
    console.log(result); // Log all the transaction info
    console.log('From Address: '  +  result.from); // Log the from address
    console.log('To Address: '  +  result.to); // Log the to address
    console.log('Ether Transacted: '  + (web3.utils.fromWei(result.value, 'ether'))); // Get the value, convert from Wei to Ether and log it
}
else {
    console.log('Error!', err); // Dump errors here
}
});