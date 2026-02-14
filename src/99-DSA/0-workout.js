function singleNumber(arr) {

    let xor = 0; 

     for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}

let result = singleNumber([1,1,2,3,3,6,6]);
console.log(result); //2

