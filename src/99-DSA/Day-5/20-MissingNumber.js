function missingNumber(arr) {

    let n = arr.length;
    let totalSum = n * (n+1) / 2;
    let partialSum = 0;

    for(let i = 0; i < n; i++ ) {
        partialSum = partialSum + arr[i];
    }

    return totalSum - partialSum; 

}

let result = missingNumber([4,0,2,1,5]);
console.log(result);