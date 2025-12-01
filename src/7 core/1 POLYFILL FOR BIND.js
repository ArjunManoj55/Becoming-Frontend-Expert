let name = {
    firstName: "arjun",
    lastName:"manoj"
}

let printName = function () {
    console.log(this.firstName + " "+ this.lastName);
}

//normal bind
let printMyName = printName.bind(name); 
printMyName(); 

//custom bind
Function.prototype.mybind = function(...args) {
    let obj = this 
    return function() {
       obj.call(args[0]);
    }
}

let printMyName2 = printName.mybind(name); 
printMyName2(); 