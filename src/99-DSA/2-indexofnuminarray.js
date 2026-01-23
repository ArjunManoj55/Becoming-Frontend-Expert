let arr = [1, 2, 3, 4, 5];

function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1; 
}

const index = searchElement(arr, 6);
console.log(index); // 1
