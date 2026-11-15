function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0;
  let j = clean.length - 1;

  while (i < j) {
    if (clean[i++] !== clean[j--]) return false;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panamaqggggggg"));
