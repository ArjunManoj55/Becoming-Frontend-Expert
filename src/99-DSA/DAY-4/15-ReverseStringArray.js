function reverseString(arr) {
  // Left pointer at start of array
  let left = 0;

  // Right pointer at end of array
  let right = arr.length - 1;

  // Swap characters until pointers meet
  while (left < right) {
    // Temporary variable for swapping
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers inward
    left++;
    right--;
  }
}

let arr = ["h", "e", "l", "l", "o"];
reverseString(arr);
console.log(arr); // ["o", "l", "l", "e", "h"]
