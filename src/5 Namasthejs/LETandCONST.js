console.log(a);
let a = 10;

//it gives a ReferenceError- , let does not work like var

//let and const are not stored on global, there are stored seperate
// so only can access after assigning

// TEMPORAL DEAD ZONE - UNTILL IT HOISTED FROM ASSIGNING , FROM HOISTING TO INITIALISING

Window.a; or this.a; // this wont work becasuse tis not on global space

//no duplicate declaration of LET/const


let a; // we can delare let a and use it anywhere in the program

//but const shold be delared at first place

//type error - assigning a value it allreday delcared const
const b; //syntax error or re declare  /fsisfsjfoissadasd
