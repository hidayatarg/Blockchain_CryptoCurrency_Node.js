//require from the crypto-js
//Generate a unique hash based on the provide data
const SHA256=require('crypto-js/sha256')

class Block{
    //we call attributes that a block need 
    constructor(timestamp,lastHash,hash,data){
        //input given to this constructor bind to the class
        this.timestamp=timestamp;
        this.lastHash=lastHash;
        this.hash=hash;
        this.data=data;

    }





    //will be using for debugging (in OOP) 
    //for last hash 10 digit is enough
    toString(){
    return `Block -
        Timestamp   : ${this.timestamp}
        Last Hash   : ${this.lastHash.substring(0,10)}
        Hash        : ${this.hash.substring(0, 10)}
        Data        : ${this.data}
    `
    }
    
    static genesis(){
        //this- return itself
        //last hash dmmy value, a dummy value, empty array
        return new this('Genesis time','-------','f1r57-h45h',[])
    }

    static mineBlock(lastBlock, data){
        //generate a timestamp
        const timestamp= Date.now();
        //local hash constant assign to the hash of the last block
        const lastHash= lastBlock.hash;
        //local hash constant (for now we dont have a hash function)
        const hash= Block.hash(timestamp,lastHash,data);


        //return the new instance of the block (it is same as genesis)
        return new this (timestamp,lastHash, hash, data);

    }

    //static hash function: represent the unique data that we want to generate the hash for
    //Providing argument the time stamp of the block, last hash and the data the block is storing
    static hash(timestamp,lastHash, data){
        //combing as one string using ES6 string
        return SHA256(`${timestamp} ${lastHash}${data}`).toString();
        //replace the to do with hash
    }


}

//file is shared among others
module.exports=Block;