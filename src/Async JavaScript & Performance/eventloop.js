console.log("Start");

//moves to Web APIs and schedules the callback.
setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

console.log("End");

//output

// Start  
// End  
// Timeout Callback

//////////////////// 📝 Example 2: Microtasks (Promise.then()) vs Macrotasks (setTimeout())


console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

//output

// Start  
// End  
// Promise  //✔ Microtasks (Promise.then()) run before Macrotasks (setTimeout()).
// setTimeout
