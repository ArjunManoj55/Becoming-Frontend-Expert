console.log("Start");

process.nextTick(() => console.log("NextTick"));
setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));
Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// console > promise > process > setimmediate > settimeout