// A higher-order function is a function that takes another function as an argument (or returns one).

function applyToEach(arr, fn) {
    // Your Code
    let result = [];

    for (let i = 0; i< arr.length; i++) {
        result.push(fn(arr[i]));
    }

    return result;
    
}

function double(num) {
    return num * 2;
}

console.log(applyToEach([1, 2, 3], double)); // Output: [2, 4, 6]

