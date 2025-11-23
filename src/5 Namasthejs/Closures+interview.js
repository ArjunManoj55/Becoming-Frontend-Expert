function x() {

    var i =1;
    setTimeout(function() {
        console.log(i);
    }, 1000)

}
x(); //print i sfter 1 sec


function x() {

    var i =1;
    setTimeout(function() {
        console.log(i);
    }, 1000)
    console.log("hi"); // this will execute first
}
x();


//printing after seconds

function x() {
    for (let i = 1; i<= 5 ; i++) { //let will set i to 1 in each execution
        setTimeout(function() {
            console.log(i);
        }, i* 1000)
    }
}
x();