function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();

//A FUNCTION ALONG WITH ITS LEXICAL SCOPE FORMS A CLOSURE

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
   return y;
}
var z = x();
console.log(z); // function
z(); //7

//pro version
function x() {
    var a = 7;
    return function y() {
        console.log(a);
    }
   
}
var z = x();
console.log(z); // function
z(); //7
