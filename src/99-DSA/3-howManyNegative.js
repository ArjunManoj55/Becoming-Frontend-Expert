let arr = [1, 2, -3, 4, -5];

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let result = countNegative(arr);

console.log(result);
