let arr = [5, 2, 4, 4, 5];

function sumOfNnumbers(n) {
  if (n < 0) return 0;

  return arr[n] + sumOfNnumbers(n - 1); //  4 + 3.
}

console.log(sumOfNnumbers(arr.length - 1));
