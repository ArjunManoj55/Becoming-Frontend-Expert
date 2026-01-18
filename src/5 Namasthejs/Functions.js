//function statement----------------------------------------------------------------
a();
function a() {
    console.log("a");
}
// a /this will work 

//function expression----------------------------------------------------------------
b();
var b = function () {  //assigning function in a variable
   console.log("b");
}
// this dosent work
// Hoisting is the diffrence bw these 2 


//anonymous  function FUNCTION WITHOUT NAME----------------------------------------------------------------
function () {
  //syntax error
}
// anonymous function are used in place where functions are used as values


//named function----------------------------------------------------------------
b();
var b = function namedFunction() {  //assigning function in a variable
   console.log("b");
}
// this dosent work

//diff bw  parameters and functions----------------------------------------------------------------
var b = function (params1, params2) {  //parameters
   console.log("b");
}
b(args1, args2); //arguments

//firstclass functions-- PASSING/RETURNING OUT/TREATED AS VALUE, ONE FUNCTION TO OTHER----------------------------------------------------------------
//functions can be assigned to variables, passed as arguments, and returned from other functions.
var b = function (params1) {  //parameters
   console.log("b");
}
b(function () {

}); //arguments

//ARROW function----------------------------------------------------------------
