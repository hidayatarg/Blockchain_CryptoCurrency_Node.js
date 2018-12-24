const Blockchain = require('./blockchain');

const bc = new Blockchain();

// add 10 blocks
for (let i = 0; i<10 ; i++){
   console.log(bc.addBlock(`foo ${i}`).toString());
}