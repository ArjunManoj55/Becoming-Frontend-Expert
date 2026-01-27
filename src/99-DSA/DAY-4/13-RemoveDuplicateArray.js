// sorted non decreesing [1,1,2,3,3,5,6,8,8] - refering duplicates a[i+1] >= a[i]
 //create a array with unique nos
 //  // relative order shold be same
//first pointer goes through the array checking if unique
//  //2d pointer shifts it to the index


function removeDuplicates(arr) {
  // If array is empty, return empty array
  if (arr.length === 0) return [];

  // x is the index of the last unique element
  let x = 0;

  // Start from index 1 because the first element is always unique
  for (let i = 1; i < arr.length; i++) {
    // If current element is different from last unique element
    if (arr[i] !== arr[x]) {
      x = x + 1;        // Move pointer for unique position
      arr[x] = arr[i]; // Place the new unique element
    }
  }

  // Return only the unique portion of the array
  return arr.slice(0, x + 1);
}

// Example usage
let result = removeDuplicates([1, 1, 2, 3, 3, 5, 6, 8, 8]);
console.log(result); // [1, 2, 3, 5, 6, 8]
