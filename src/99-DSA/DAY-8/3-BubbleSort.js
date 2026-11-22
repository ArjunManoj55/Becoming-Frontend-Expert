let arr = [9, 7, 5, 3, 6, 2, 4, 8, 5, 3, 0];

function Bubble(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  }
  return arr;
}

console.log(Bubble(arr));
