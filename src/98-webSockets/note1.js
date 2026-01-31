// socket io, pusher, ably, ws libarry

//socket io - heavy,nodejs , good for speed development, not pure
//pusher/ably - not great, payed
//ws - low level , speed

// states

//connectiong
//open - safe to send
//closing
//closed

// we can chet the states anytime using 
socket.readyState

// ------------------------- SERVER SIDE(nodejs) ---------------------------------

import { WebSocketServer } from "ws";

// Create WebSocket server
const wss = new WebSocketServer({ port: 8080 });

/**
 * Fired when a new client successfully completes
 * the WebSocket handshake
 */
wss.on("connection", (socket, request) => {
  console.log(
    "Client connected:",
    request.socket.remoteAddress
  );

  // Optional: send welcome message
  socket.send(
    JSON.stringify({ type: "WELCOME", message: "Hello client 👋" })
  );

  /**
   * Fired when client sends data to server
   * Data comes as Buffer → convert to string
   */
  socket.on("message", (raw) => {
    const text = raw.toString();
    console.log("Incoming message:", text);

    // Example: echo back
    socket.send(
      JSON.stringify({ type: "ECHO", payload: text })
    );
  });

  /**
   * Fired when client closes the connection
   */
  socket.on("close", (code, reason) => {
    console.log(
      "Client disconnected:",
      code,
      reason.toString()
    );
  });

  /**
   * IMPORTANT:
   * Always handle errors or the whole server can crash
   */
  socket.on("error", (err) => {
    console.error("Socket error:", err.message);
  });

  /**
   * Optional but good practice:
   * Heartbeat (detect dead connections)
   */
  socket.on("pong", () => {
    socket.isAlive = true;
  });
});

/**
 * Optional: heartbeat checker (every 30s)
 */
setInterval(() => {
  wss.clients.forEach((socket) => {
    if (socket.isAlive === false) return socket.terminate();
    socket.isAlive = false;
    socket.ping();
  });
}, 30000);


// ------------------------- CLIENT SIDE ---------------------------------

// Create a new WebSocket connection
const socket = new WebSocket("ws://localhost:8080");

/**
 * Fired when handshake succeeds
 * (connection is now OPEN)
 */
socket.onopen("open", () => {
  console.log("Connected to server");

  socket.send(
    JSON.stringify({ type: "HELLO", message: "Hello server 👋" })
  );
});

/**
 * Fired when server sends data
 */
socket.onmessage("message", (event) => {
  // Server usually sends string data
  const data = JSON.parse(event.data);
  console.log("New data from server:", data);
});

/**
 * Fired when connection is closed
 * (server down, tab closed, network issue, etc.)
 */
socket.onclose("close", (event) => {
  console.log(
    "Disconnected from server",
    "Code:", event.code,
    "Reason:", event.reason
  );
});

/**
 * Fired when something goes wrong
 */
socket.onerror("error", (err) => {
  console.error("WebSocket error:", err);
});
