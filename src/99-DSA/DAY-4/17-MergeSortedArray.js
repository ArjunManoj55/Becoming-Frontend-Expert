function mergeArray(arr1, m, arr2, n) {
    // Pointers for arr1, arr2, and merged array
    let i = m - 1;           // Last index of valid elements in arr1
    let j = n - 1;           // Last index of arr2
    let k = m + n - 1;       // Last index of merged array

    // Extend arr1 to hold all elements
    arr1.length = m + n;

    // Merge from the end to avoid overwriting
    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }

    // Copy remaining elements from arr2 (if any)
    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }
}

let arr1 = [1, 6, 6, 8, 9, 10];
let arr2 = [2, 2, 4, 6, 8];

mergeArray(arr1, 6, arr2, 5);
console.log(arr1);
