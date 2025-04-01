const numbers = [1, 2, 3, 4];

function squareNumbers(arr) {
    for (let i =0 ; i<arr.length ; i++) {
        arr.map(num => num * num)
    }
    return arr;
}

console.log(squareNumbers(numbers)); // Expected: [1, 4, 9, 16]
console.log(numbers); // Should remain unchanged!  

