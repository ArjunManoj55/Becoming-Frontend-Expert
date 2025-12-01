"use strict"; // strict mode

// this in global space/window - represents the global object -------------
console.log(this); // window/global based on envrmnt

//inside function--------------
function x() {
  console.log(this);
}
x(); // in normal -> window  / in strict mode -> undefined --- ans undefined
window.x(); // window
// it depends on how its called
// when called without any ref it becomes undefined

// (this substitution)  - on non strict mode
// if value of this is undefined or null
// this will be replaced with global object

// this inside objects method--------------------------------------

//function as a part of object known as method

const obj = {
  a: 10,
  x: function () {
    // x is a method
    console.log(this);
    console.log(this.a); // out 10 only
  },
};

obj.x(); // value of this is obj

// call/applay/bind---------------------------------------------------

const student = {
  name: "arjun",
  printName: function () {
    console.log(this.name);
  },
};

student.printName();

const student2 = {
  name: "arjun2",
};

student.printName.call(student2); //usinf printname function in second object

student.printName.apply(student2, ["kerala", "TN"]); // we need to pass arguments as array list [] 

let printNmae = student.printName.bind(student2); // it will create a copy of name and bind and returns as a method to call later
console.log(printNmae); //for later user / its like a function which we can invoke later

// thiws inside arrow function---------------------------------------------------------------

const obj1 = {
    a: 10,
    x:  () => {
        console.log(this);
    }
};
obj.x(); // it wont be the obj1 , value will be window.object [enclosing lexical(previos) context]
 


