import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080});

//0:coonecting
//1:open
//2:closing
//3:closed

//connection event
wss.on('connection', (socket, request) => { // socket -> individual connection to client, req -> headers cookies ip and more
    const ip = request.socket.remoteAddress;

    socket.on('message', (rawData) => {
        const message = rawData.toString()
        console.log({message})

        wss.clients.forEach((client) => {
            // if(client.readyState === 1) client.send(`server broadcast:' ${message}`); // 1 open and can send message // insted of using 1(magic nos, import websocket and use it like websocket.open)
            if(client.readyState === WebSocket.OPEN) client.send(`server broadcast:' ${message}`);
        })
    });

    socket.on('error', (err) => {
        console.error(`error:  ${err.message}: ${ip}` )
    })

    socket.on('close:', () => {
        console.log('client disconnected:');
    })
});

console.log("websocket server is live on ws://localhost:8080");

// run this
// run this on new terminal wscat -c ws:localhost:8080