function moveZeros(arr) {
  let x = 0;

  //filling left
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  // remaining space with 0's
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

let result = moveZeros([0, 1, 0, 3, 12]);
console.log(result);
