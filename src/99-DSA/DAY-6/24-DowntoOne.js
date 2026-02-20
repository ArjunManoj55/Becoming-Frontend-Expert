// n to 1
function print(n) {
  if (n < 1) return;

  console.log(n);

  print(--n);
}

print(25);


// 1 to n 
function print(m, n) {

  if (m > n) return;

  console.log(m);

  print(m + 1, n); // never miss simplify input
}

print(1,25); // never make too deep

//keep mind time complexity ->  O(n)
