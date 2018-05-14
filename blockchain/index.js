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

    //function that will check the validityi of incoming chain
    //Parameters (incoming chain)
    isValidChain(chain){
        //first element of incoming chain matches the genesis block
       //Stringyify the element to compare
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;


    
        //validation on each block after teh genesis block in the incoming chain
        for (let i = 1; i < chain.length; i++) {
            //current block
            const block = chain[i];
            
            //the last block
            const lastBlock = chain[i - 1];
           
            //the current block last hash must match the hash of the last block
            //if the block hash not equal to the generated hash (changed by any reason)
            if (block.lastHash !== lastBlock.hash ||
                block.hash !== Block.blockHash(block)) {
                return false;
                
            }
        }
        return true;
    
    } 

    replaceChain(newChain){
        //make sure it is a longer chain than the current chain
        if (newChain.length<=this.chain.length){
            console.log('The Recieved chain is not longer than the current chain.')
            //escape from the function
            return;  
        }
        //check the new change is valid
        else if(!this.isValidChain(newChain)){
            console.log('The recieved chain is not valid.');
            //escape from the function
            return
        }
    //after passing the following controlls
    console.log('Replacing block chain with the new chain');
    this.chain=newChain;

    }
}

//sharing this module to be accessed by other files
module.exports= Blockchain;