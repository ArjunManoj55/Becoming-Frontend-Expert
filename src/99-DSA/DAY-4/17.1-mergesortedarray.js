function mergeSorted(a, b) {
  const out = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);
  return out.concat(a.slice(i), b.slice(j));
}

let a = [1, 6, 6, 8, 9, 10];
let b = [2, 2, 4, 6, 8];

console.log(mergeSorted(a, b));
