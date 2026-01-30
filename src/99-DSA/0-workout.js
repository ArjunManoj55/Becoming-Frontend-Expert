function mergeArray(arr1, m, arr2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }
}

let arr1 = [0, 1, 6, 6, 8, 9, 10];
let arr2 = [2, 2, 4, 6, 8];

mergeArray(arr1, 6, arr2, 5);
console.log(arr1);
