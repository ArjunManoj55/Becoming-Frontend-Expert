// ✅ Pure Function Example
// A function that only depends on its input and has no side effects:

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (Always same result)


// ❌ Impure Function Example
// A function that modifies external state (side effect):

let total = 0;

function addToTotal(value) {
    total += value; // ❌ Modifies external variable
    return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 (Not predictable)


//Practical Example: Filter Active Users

const users = [
    { name: "Arjun", active: true },
    { name: "Manoj", active: false },
    { name: "Dev", active: true }
];

function getActiveUsers(users) {
    return users.filter(user => user.active);
}

console.log(getActiveUsers(users)); // [{ name: "Arjun", active: true }, { name: "Dev", active: true }]
console.log(users); // ✅ Original array remains unchanged!


//eg 2

const numbers = [1, 2, 3, 4];

function squareNumbers(arr) {
    for (let i =0 ; i<arr.length ; i++) {
        arr.map(num => num * num)
    }
    return arr;
}

console.log(squareNumbers(numbers)); // Expected: [1, 4, 9, 16]
console.log(numbers); // Should remain unchanged!  
