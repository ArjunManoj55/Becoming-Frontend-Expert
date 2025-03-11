// 1️⃣ "Start"
// 2️⃣ "Inside setTimeout" (2-second delay)
// 3️⃣ "Inside Promise"
// 4️⃣ "End"

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");


