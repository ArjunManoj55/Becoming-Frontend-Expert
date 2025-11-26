//HIGHER ORDER FUNCTION - FUNCTION WHICH TAKES OTHER FUNC AS ARGUMENT / RETURNS A FUNC FROM IT
function x() {
    console.log("hi")
}

function y() { //higher order function y
    x();
}

y();

//eg func programming
const radius = [1, 2, 3, 4]

const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

const diameter = function(radius) {
    return 2 * radius;
}

const calculate = function(radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length ; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area)); // console.log(radius.map(area)); same
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));