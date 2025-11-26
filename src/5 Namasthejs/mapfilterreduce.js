//array.map--------------------------------------------------------------

// const arr = [5, 1, 3, 5, 6];

// function double(x) {
//     return x * 2;
// }

// function triple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(triple);

//or
// const output = arr.map((x) => x * 2);

// console.log(output);

//filter--------------------------------------------------------------------ood/even

// const arr = [5, 1, 3, 5, 6, 2];

// const output = arr.filter((x) =>  x % 2 == 0);

// console.log(output);

//reduce----------------------------------------------------------------- sum or max

const arr = [5, 1, 3, 5, 6, 2];

//normal way
// function findSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length ; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

//reduce way

//accumulator-accumulate the values we need/current-values inside -sum 
const output = arr.reduce(function(acc, curr) { 
    acc = acc + curr;
    return acc;
 }, 0); //initial value 

// console.log(output); //22

//max
const output2 = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0); // set init value of max = 0

console.log(output2);



// ---------------------------------------------------------------------------------------
//map-real world
const users = [
  { firstName: "user1", lastName: "test1", age: 10 },
  { firstName: "user2", lastName: "test2", age: 15 },
  { firstName: "user3", lastName: "test3", age: 10 },
  { firstName: "user4", lastName: "test4", age: 25 },
  { firstName: "user5", lastName: "test5", age: 30 },
];

//full name-map
const output3 = users.map((x)=> x.firstName + " " + x.lastName);
console.log (output3);

//smae age - reduce, to find same age users no
const sameAge = users.reduce(function(acc1, curr1) {
    if(acc1[curr1.age]) {
        acc1[curr1.age] = ++acc1[curr1.age];
    }else {
        acc1[curr1.age] = 1;
    }
    return acc1;
}, {});

console.log(sameAge);

//filter
const first = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(first);
