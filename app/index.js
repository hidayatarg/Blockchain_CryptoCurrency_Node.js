const express = require('express');
//add body paser
const bodyparser= require ('body-parser')

const Blockchain = require('../blockchain');
//p2p server
const P2pServer = require('.//p2p-server')


const HTTP_PORT = process.env.HTTP_PORT || 2001;

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc)

//Json within post request
app.use(bodyparser.json());


app.get('/blocks', (req, res) => {
	res.json(bc.chain);
});

//Post Request
app.post('/mine', (req, res) => {
   const block =bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    // Update the chains
    p2pServer.syncChain();

    //redirect to the 
    res.redirect('/blocks')
});

app.listen(HTTP_PORT, () => console.log(`Listening on port: ${HTTP_PORT}`));

// Start the web socket server
p2pServer.listen();
