// if 2 steps

// 1+1
//2 both at once

//2 ways

//formula- d[i] = d[i-1] + d[i-2]

// recursion/topdown
function howManyWays(n, memo = {}) {
  // base cases
  if (n === 0 || n === 1) return 1;

  // if already computed
  if (memo[n]) return memo[n];

  // recursion with memoization
  memo[n] = howManyWays(n - 1, memo) + howManyWays(n - 2, memo);

  return memo[n];
}

console.log(howManyWays(2)); // 8


//Bottom-Up (Tabulation).
function howManyWays(n) {
  if (n === 0 || n === 1) return 1;

   let dp = [1, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(howManyWays(5)); // 8
