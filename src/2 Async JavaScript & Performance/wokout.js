// const numbers = [1, 2, 3, 4];

import { useState } from "react";

// const { useEffect, useState } = require("react");

// function squareNumbers(arr) {
//     for (let i =0 ; i<arr.length ; i++) {
//         arr.map(num => num * num)
//     }
//     return arr;
// }

// function applyToEach(arr, fn) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i]));
//   }

//   return result;
// }

// function double(num) {
//   return num * 2;
// }

// console.log(applyToEach([1,2,3], double));


////////////////////////////////////////////////////////////////////array
// let fruits = ["apple","banana"];

// // console.log(fruits[0]);

// for(let i = 0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }


//////////////////////////////////////map-method
// const numbers = [1,2,3,4,5];

// const double = numbers.map(num => num * 2);

// console.log(double);


////////////////////////////reverse string
// let str = "i am arjun";

// let splittedString = str.split("").reverse().join("");
// console.log(splittedString);


/////////////palindrome sting

// function isPalindrome(str) {
//   // reverse the string
//   const reversed = str.split("").reverse().join("");

//   // compare original and reversed
//   if (str === reversed) {
//     console.log(`${str} is a palindrome ✅`);
//   } else {
//     console.log(`${str} is not a palindrome ❌`);
//   }
// }

// // test it
// isPalindrome("madam");
// isPalindrome("hello");



////////////////////obj - arr

// const obj = {
//     a:1,
//     b:2,
//     c:3,
// };

// console.log(Object.entries(obj));


////////////////////promise chaining


// 


//////create hook

// function useCounter(initialValue=0) {
//     const [count, setCount] = useState(initialValue);

//     const increment = () => {setCount(count+1)}


//     return {count, increment}
// }


async function fetchData() {

    try{
        const response = await fetch("");
        const data = await response.json();
        console.log("data" ,data)
    } catch(error) {
        console.error("error", error)
    }
}
fetchData()

