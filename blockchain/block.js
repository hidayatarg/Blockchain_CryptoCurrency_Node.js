//require from the crypto-js
//Generate a unique hash based on the provide data
const SHA256=require('crypto-js/sha256')

//level of difficulty
const DIFFICULTY=4;


class Block{
    //we call attributes that a block need 
    constructor(timestamp, lastHash, hash, data, nonce){
        //input given to this constructor bind to the class
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce

    }

    //will be using for debugging (in OOP) 
    //for last hash 10 digit is enough
    toString(){
    return `Block -
        Timestamp   : ${this.timestamp}
        Last Hash   : ${this.lastHash.substring(0,10)}
        Hash        : ${this.hash.substring(0, 10)}
        Nonce       : ${this.nonce}
        Data        : ${this.data}
    `
    }
    
    static genesis(){
        //this- return itself (zero default nonce value)
        //last hash dmmy value, a dummy value, empty array
        return new this('Genesis time','-------','f1r57-h45h', [], 0)
    }

    static mineBlock(lastBlock, data){
       //generate a timestamp
        let hash, timestamp;
        
        const 
        //local hash constant assign to the hash of the last block
        const lastHash= lastBlock.hash;
        
        let nonce = 0;
       
        // generate hash each iteration
        // from zero up to difficulty and while condition run as long as this hash not equal zero. repeat we run
        do{
            nonce++;
            // Generate timestamp at each iteration
            timestamp = Date.now();
            hash = Block.hash(timestamp, lastHash, data, nonce);
        }while(hash.substring(0, DIFFICULTY) !=='0'.repeat(DIFFICULTY));
        // check of the proof of work algorithm
        
       
        //return the new instance of the block (it is same as genesis)
        return new this (timestamp,lastHash, hash, data, nonce);

    }

    //static hash function: represent the unique data that we want to generate the hash for
    //Providing argument the time stamp of the block, last hash and the data the block is storing
    static hash(timestamp,lastHash, data, nonce){
        //combing as one string using ES6 string
        return SHA256(`${timestamp} ${lastHash}${data}${nonce}`).toString();
        //replace the to do with hash
    }

    //for generating hashes
    static blockHash(block){
        //all values to generate hash
        const {timestamp, lastHash, data, nonce}= block;
        return Block.hash(timestamp, lastHash, data, nonce);
    }

}

//file is shared among others
module.exports=Block;