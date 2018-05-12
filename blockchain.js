//Access to the required block module
const Block = require('./block');


//creating the block chain
class Blockchain{
    constructor(){
        //chain of array (gensis block)
        this.chain=[Block.genesis()];
    }

    //a function for this class
    //parameter:Data we want to store
    addBlock(data){

        //we need last block that will take the value from the last index
        //last value of this chain array
        const lastBlock=this.chain[this.chain.length-1];

        //Generate new block
        const block= Block.mineBlock(lastBlock, data);
        
        //adding the new produced block to the chain array
        this.chain.push(block)

        //result of the function
        return block;
    }
}

//sharing this module to be accessed by other files
module.exports= Blockchain;