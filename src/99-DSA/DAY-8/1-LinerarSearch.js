let arr = [1, 6, 6, 8, 9, 10];

function linear(arr, target) {
    for(let i in arr) {
        if(arr[i] === target) {
            return i
        }
    }
return arr[i]
}


console.log(linear(arr, 8))