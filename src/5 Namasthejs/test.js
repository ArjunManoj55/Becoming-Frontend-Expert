let multiplyClosure = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo2 = multiplyClosure(2);  
multiplyByTwo2(3);