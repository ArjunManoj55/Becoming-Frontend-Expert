let arr = [1, 2, 3, 4, 5];

function sumOdd(n) {

  let isOdd = arr[n] % 2 !== 0;

  // base case: first element to sto the loop
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }

  // recursive case
  if (isOdd) {
    return arr[n] + sumOdd(n - 1);
  } else {
    return sumOdd(n - 1);
  }
}

console.log(sumOdd(arr.length - 1)); // Output: 9