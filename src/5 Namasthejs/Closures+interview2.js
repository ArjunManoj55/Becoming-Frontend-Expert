function outer() {
    var x =1;
    function inner() {
        console.log(x);
    }
    //  var x =1; this will also work
    return inner;
}

outer()();
//or can call like
var close = outer()
close();

//DATA PRIVACY

function counter() {
    var count = 1;
    function increment() {
        count++;
    }
    return increment;
}
console.log(count) //here count cant be assessible we can print it

// OVER CONSUPTION OF MEMORY - NEED GARBAGE COLLECTOR

