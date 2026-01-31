//polling - checking after interval - cosltyy-----------
// harder to maintin lots of htttp req

//web sockets - once connection is open messages are simple/tiny------ effcient
// unlimitted connections can idle - no stress
// it starts as a http and then ask to update as ws
// ws- un encrypted wss-production encrypted

//architecture

//step1 - connect
const socket = newWebSocket("ws://loclhost:8080")

//step2 - upgrade req/switch

//step3 - state/memory - statefull
//ghost connection - if user losse internet websocket thinks its still connected - we need to clean it 
//else server dies slowley from holding on to ghosts

// using ping-pong we can solve it , its simpler than http req 

// data supported - json/binary

    socket.send(
        JSON.stringify({ userId:42, status:"typing"})
    );

// bnary for things getting outAhand - audio straming,video frames, games, -(large payloads)---
 //send data using (arraybuffer) or (blob) - fast/small/effcient

 // it uses OP CODE - telling is its , text / binary / closing / ping-pong

 //back pressure -> server sending large payloads but user is on low network, -> so it pile up on memory
 // so the server sends slow to prevent;

 


