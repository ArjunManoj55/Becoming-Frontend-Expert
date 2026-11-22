/// can  be only applied t0  sorted array
let arr = [1, 6, 6, 8, 9, 10];

function Binary(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(Binary(arr, 88));
