function countDigits(x) {
  if (x == 0) {
    return 1;
  } 

  x = Math.abs(x); //remove -ve
  let count = 0;
  while (x > 0) {
    x = Math.floor(x / 10); // ermove .343
    count = count + 1;
  }
  return count;
}

let result = countDigits(1100);
console.log(result);
