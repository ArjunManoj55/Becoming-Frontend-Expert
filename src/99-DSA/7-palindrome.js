// n % 10 -> to find last digit
// n / 10 -> to remove last digit

function findPlaindrome(n) {
  let original = n;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  if (rev === original) {
    return true;
  } else {
    return false;
  }

//   return rev === original; repplace all if case
}

let result = findPlaindrome(121);
console.log(result);
