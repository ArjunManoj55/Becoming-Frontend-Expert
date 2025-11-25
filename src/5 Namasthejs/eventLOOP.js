//JS runtime env - js engine/api/eventloop/callback queue/micro task queue

//WEB APIs -window. and give it to call stack

// setTimeout() when timeout expires it needs to go to call stack
// so it cant directley go to call stack so its put in to callback queue
// event loop checks the callback queue and pushes it to call stack
//if callstack dont become empty setTimeout needs to wait- event loop only works that way




// dom api = document.getElementById
// it will wait for the user to click forever
// when clicked 
// so it cant directley go to call stack so its put in to callback queue
// event loop checks the callback queue and pushes it to call stack

// EVENTLOOP - MONITOR CALLBACK QUEUE AND PUSH INTO CALL STACK

// WHY DO WE NEED CALBACK QUEUE - 
// PRIORITY MICROTASK QUEUE >  CALBACK QUEUE // REASON FOR STARVATION IS MICROTASKS KEEPS CREATING



// fetch
// GOES TO PRIORITY MICROTASK QUEUE


// local Storageconsole
// location

//JS ENGINE
//PASSING -> COMPILATION -> EXE

