// this === window //true for a empty file run

var a =10;
function b () {
    var x = 10;
}

// console.log(window.a); it will assume we are refering to global space
console.log(a);
console.log(x); // not defined becasue its inside a function