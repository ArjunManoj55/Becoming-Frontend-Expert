// arr[1,2,3,3,5,6,7] val =3 remove 3 from arr

function removeElement(arr, val) {
    let x = 0;
    for(let i = 0; i < arr.length ; i++ ) {
        if(arr[i] !== val) {
            arr[x] = arr[i]
            x = x + 1;
        }
    } return arr.slice(0, x); // if no is needed return x;
}

let result = removeElement([1,2,3,3,5,6,7,3], 3);
console.log(result);