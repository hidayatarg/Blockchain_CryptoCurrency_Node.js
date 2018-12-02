const Websocket = require('ws');


const P2P_PORT =  process.env.P2P_PORT || 5001;

// instance will be made according to p2p
// All web socket array
const peers = process.env.PEERS ? process.env.PEERS.split(','):[];

class p2pServer{
    constructor(blockchain){
        this.blockchain = blockchain;
        this.sockets = [];
    }

    // For listening the
    listen(){
        // Server class 
        const server = new Websocket.Server({port: P2P_PORT});

        // Listen for the incoming messages
        // Fire when new socket connected call back function will do work
        server.on('connection', socket=>this.connectSocket(socket));
        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    connectSocket(socket){
        this.sockets.push(socket);
        console.log('Socket connected');
        
    }
}


