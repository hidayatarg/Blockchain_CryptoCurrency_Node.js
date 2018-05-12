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
        const hash= 'todo-hash';


        //return the new instance of the block (it is same as genesis)
        return new this (timestamp,lastHash, hash, data);

    }
}

//file is shared among others
module.exports=Block;