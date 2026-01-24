let arr = [1, 2, -3, 4, -5];

function secondLargest() {
  if (arr.length < 2) {
    return null;
  }
  let firstlargest = -Infinity;
  let secondlargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstlargest) {
      secondlargest = firstlargest;
      firstlargest = arr[i];
    }
  }
  return secondlargest;
}

let result = secondLargest(arr);
console.log(result);
