//Access to the required blockchain module
const Blockchain = require('./blockchain');

//require the block model that has gunesis function
const Block= require('./block')

//providing the test the blockchain and the error call back function
describe('Blockchain', () => {
    //Declaring variables
    let bc;


    //beforeEach runs before each unit test
    beforeEach(() => {
        //new-keyword: refresh instance of this blockchain class
        bc= new Blockchain();
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

});

//beforeach function: allow the same code for each of the following unit test

