// block = New line + dimensions.
// inline = Same line + content-sized.
// inline-block = Same line + controllable dimensions.

// ----------------------------------------------------------------

// Relative: Moves an element from its original position while keeping its original space in the layout.

// Absolute: Removes an element from normal document flow and positions it relative to its nearest positioned ancestor.

// Fixed: Removes an element from normal document flow and positions it relative to the viewport, so it stays in place while scrolling.

// -------------------------------------------------------

// Pseudo-class: Styles an element based on its state or condition.
// Pseudo-element: Styles a specific part of an element or creates generated content.

// -------------------------------------------------------

// Critical CSS is the minimum CSS required to render the initially visible part of a webpage (above the fold), which is loaded first to make the page appear faster.


// ----------------------------------largest chaR
const largestChar = (str) => {
   let words = str.split(" ");
   let largest = "";

   for(let word of words) {
    if(word.length > largest.length){
        largest = word;
    }
   }

   return largest
}

console.log(largestChar("df kdjfkd dmn kjsdlksdksd5555555"));


// ----------------------------------REMOVE DUPE


const arr = [1, 3,4,6,77,77];

console.log(arr.filter((item, index) => arr.indexOf(item) == index))




// -------------------------------palindrome

function isPalindrome(str) {
const s = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // ignore case,
// spaces and punctuation
let left = 0;
let right = s.length - 1;
while (left < right) {
if (s[left] !== s[right]) return false;
left++;
right--;
}
return true;
}
isPalindrome('A man, a plan, a canal: Panama'); // true
isPalindrome('React'); // false

// -----------------------------freq

const frequency = (arr) => {
    let count = {};

    for (let item of arr) {
        count[item] = (count[item] || 0) + 1;
    }

    return count;
};

console.log(frequency([1, 2, 3, 2, 4, 1, 2, 5]));

// --------------------------two sum

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]
