//explore the block class

const Block = require('./block')


//Used for the test before the mine block function
/*const block = new Block('foo','bar','zoo','baz');
 console.log(block.toString());
 console.log(Block.genesis().toString()); */


 //Minning the new block / we need to give the last block as referance
 //It is the first block so (give the ginese block)
 const fooBlock= Block.mineBlock(Block.genesis(), 'foo'); //for the foo block
 console.log(fooBlock.toString());