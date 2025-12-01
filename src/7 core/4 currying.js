//using bind
let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2); // 2 goes to x , if we add one mmore it goes to y
let multiplyByThree = multiply.bind(this, 3);

multiplyByTwo(5);

//closures
let multiplyClosure = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo2 = multiplyClosure(2);  
multiplyByTwo2(3);
 