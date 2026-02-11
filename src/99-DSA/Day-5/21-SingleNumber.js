function singleNumber(arr) {

    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === 1) {
            return arr[i];
        }
    }
}

let result = singleNumber([1,1,2,3,3,6,6]);
console.log(result); //2

// a XOR 0 = a
//a XOR a = 0 -(eliminate duplicate use XOR) EASY WAY

//REDUCE SPACE COMPLXITY BY XOR

function singleNumber(arr) {

    let xor = 0; 

     for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}

let result = singleNumber([1,1,2,3,3,6,6]);
console.log(result); //2
