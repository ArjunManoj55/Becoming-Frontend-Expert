//normal

// var x = 7;

// function getName() {
//     console.log("hi arjun")
// }

// getName();
// console.log(x);


//hoisting - calling them even before declaring

getName(); //this works 
console.log(x); //undefined but it knows its there


var x = 7;

function getName() { // IF ITS ARROW FUNCTION IT WILL SAVE IN MEMORY LIKE A VERIABLE WITH UNDEFINED VALUE
    console.log("hi arjun")
}

// EVEN BEFORE CODE IS EXECUTED MEMORY IS ALLOCATED TO EACH VARIABLE WITH UNDEFINED VALUE 
// EXECUTION CONTEXT WITH TWO COMPONENTS MEMORY AND CODE 
// WHEN CODE IS RUNNING THE VALUES ARE ASSIGNED LATER BUT COMPLETE FUNCTIONS ARE SAVED IN MEMORY  