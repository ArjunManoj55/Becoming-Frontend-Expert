let arr = [1, 2, -3, 4, -5];

function findLargest() {
     let value = 0; //-Infinity
    for( let i = 0 ; i < arr.length ; i++ ) {
        if( arr[i] > value ) {
            value = arr[i]
        }
    } return value;
}

let result = findLargest(arr);
console.log(result);
-Infinity