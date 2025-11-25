// callback function------------------------------------------------------------

// a function which we pass into other function is cal;led call back function
function x () {

}
x(function y () {

})
//y is the callback function here


//set timeout using callback---------------------------------------------------
setTimeout(function() {
    console.log("timeout")
},5000)

function x () {
    console.log("x")
    y();
}
x(function y () {
    console.log("y")
})

//x
//y
//timeout

