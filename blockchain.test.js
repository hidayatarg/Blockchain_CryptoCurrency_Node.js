//Access to the required blockchain module
const Blockchain = require('./blockchain');

//require the block model that has gunesis function
const Block= require('./block')

//providing the test the blockchain and the error call back function
describe('Blockchain', () => {
    //Declaring variables
    let bc, bc2;


    //beforeEach runs before each unit test
    beforeEach(() => {
        //new-keyword: refresh instance of this blockchain class
        bc= new Blockchain();
        bc2= new Blockchain();
    });

    //it (description about test executed, call back error function codes to execute the test)
    //1.Test the blockchain to start with genesis block
    it('starts with genesis block', () => {
        //the first value in the chain equal to genesis 
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    //2.Test adds a new block
    it('adds a new block', () => {
        const data = 'foo';
        bc.addBlock(data);

        //Look at the last block the chain that is same as dummy data
        expect(bc.chain[bc.chain.length-1].data).toEqual(data)
    });


    //3.Test validate a valid chain
    it('validates a valid chain', () => {
        bc2.addBlock('foo');

        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    //4.Test invalidates with a corrupt genesis block
    it('invalidates a chain with a corrupt genesis block', () => {
       //incase bad data is in genesis block
        bc2.chain[0].data = 'Bad data';

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    //5.Test invalidates a corrupt chain *(Data is tempered)
    it('invalidates a corrupt chain', () => {
        //incase add block is changes then
        bc2.addBlock('foo');
        bc2.chain[1].data = 'Not foo';

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    //Test for the replaceChain function in the Block.js

    //1.Test: Check if the chain is replaced with a valid chain
    it('Testing: Replaces the chain with a valid chain', () => {
        //add a new block 
        bc2.addBlock('goodness');
       // pass the first change to the blockchain it should valid
        bc.replaceChain(bc2.chain);

        //check the change of the first instance should equal to the change of second instance
        expect(bc.chain).toEqual(bc2.chain);

    });

    //2.Test: Check if the chain is replaced with a valid chain
    it('It does not replace the chain with one of less than or equal to length', () => {
       
        bc.addBlock('wee');
       // pass the first change to the blockchain it should valid
        bc.replaceChain(bc2.chain);

        //check the change of the first instance should not equal with the change of second instance
        expect(bc.chain).not.toEqual(bc2.chain);

    });

    

});

//beforeach function: allow the same code for each of the following unit test

