const express = require('express');
//add body paser
const bodyparser= require ('body-parser')

const Blockchain = require('../blockchain');


const HTTP_PORT = process.env.HTTP_PORT || 2001;

const app = express();
const bc = new Blockchain();

//Json within post request
app.use(bodyparser.json());

app.get('/blocks', (req, res) => {
	res.json(bc.chain);
});

//Post Request
app.post('/mine', (req, res) => {
   const block =bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);

    //redirect to the 
    res.redirect('/block')
});

app.listen(HTTP_PORT, () => console.log(`Listening on port: ${HTTP_PORT}`));
