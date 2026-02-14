function mergeArray(arr1, m, arr2, n) {
  // Pointer i: points to the last valid element in arr1
  let i = m - 1;

  // Pointer j: points to the last element in arr2
  let j = n - 1;

  // Pointer k: points to the last position in the merged array
  let k = m + n - 1;

  // Resize arr1 to accommodate all elements from arr2
  // This creates space at the end for in-place merging
  arr1.length = m + n;

  // Continue merging until all elements of arr2 are placed
  while (j >= 0) {
    // If arr1 has remaining elements and current arr1 element is larger,
    // place it at the current end position
    if (i >= 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } 
    // Otherwise, place the current element from arr2
    else {
      arr1[k] = arr2[j];
      j--;
    }

    // Move to the next position from the end
    k--;
  }
}



let arr1 = [1, 6, 6, 8, 9, 10];
let arr2 = [2, 2, 4, 6, 8];

mergeArray(arr1, 6, arr2, 5);
console.log(arr1);
 Assignment-Realtime-Ai-Chatbot