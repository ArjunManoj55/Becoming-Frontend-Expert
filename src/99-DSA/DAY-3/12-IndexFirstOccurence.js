//we can use inbuild haystack.indexOf(needle);
// but cant use this,

// we use slidign window approch

// h = saturdaysad n = sad , sat = sad -> atu = sad, tur = sad -> .....,,
//     |__|
//      |__|
// it keeps sliding the window on by one, and return i - starting index

function firstIndex(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  // Edge case: empty needle
  if (m === 0) return 0;

  // Slide window of size `m` over haystack
  for (let i = 0; i <= n - m; i++) {
    let j;

    // Compare current window with needle
    for (j = 0; j < m; j++) {
      // If characters don't match, break inner loop
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    // If we matched all characters of needle
    if (j === m) {
      return i;
    }
  }

  // Needle not found
  return -1;
}

// Example
console.log(firstIndex("saturdaysad", "sad")); // 8
