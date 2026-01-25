// Dynamic Programming TWO TYPES

// top down (memoization)- recursion (easy to think) - expensive

// bottom up (tabulation) - tabulation (tough to think) - easy computation


//------------------------------------------------------

//topdown - recursion
let store = {};

function fib(n) {
  if (n <= 1) {
    return n;
  }

  if (!store[n]) {
    store[n] = fib(n - 1) + fib(n - 2);
  }

  return store[n];
}

let result = fib(2);
console.log(result);

//bottomup - this is better - tabulation

function fib(n) {
  if (n <= 1) return n;

  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(fib(5));
