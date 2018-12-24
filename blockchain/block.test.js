//Access to the block module

const Block= require('./block');

//level of difficulty
const { DIFFICULTY } = require('./config')

//providing the test the block and the error call back function
describe('Block', ()=>{
    //Declaring variables
    let data, lastBlock, block;


    //beforeEach comes after the two unit tests
    beforeEach(()=>{
        //assign the data dummy value
        data='bar';
        //default last block
        lastBlock= Block.genesis();
        //mine the block
        block= Block.mineBlock(lastBlock, data);
    });


    //for unit test using just function it
    //it (description about test executed, call back error function codes to execute the test)
    //1.Test the block to set the data to the matched input
    it('sets the `data` to match the input',()=>{
    //implement the test
    //expect the data
    expect(block.data).toEqual(data);
    });

    //2.Test last hash is set properly
    it('set the `lastHash`to match the hash of the last block',()=> {
        expect (block.lastHash).toEqual(lastBlock.hash)
    });

    //3.Test
    it('generates a hash that matches the difficulty', ()=>{
        expect(block.hash.substring(0, block.difficulty)).toEqual('0'.repeat(block.difficulty));
        console.log(block.toString());
        
    });

    //4.Test
    it('lowers the difficulty for slowly mined blocks', ()=>{
        // input 
        expect(Block.adjustDifficulty(block, block.timestamp+36000)).toEqual(block.difficulty-1);
    });

    //5.Test
    it('raises the difficulty for quickly mined blocks', ()=>{
        // input 
        expect(Block.adjustDifficulty(block, block.timestamp+1)).toEqual(block.difficulty+1);
    });
});

//beforeach function: allow the same code for each of the following unit test
