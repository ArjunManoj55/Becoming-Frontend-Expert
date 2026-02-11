function maxConsicutiveOnes(arr) {

    let currentCount = 0;
    let maxCount = 0;

    for(let i = 0; i < arr.length ; i++ ) {
        if(arr[i] == 1) {
            currentCount++;
        } else {
            maxCount = Math.max(currentCount, maxCount);
            currentCount = 0;
        }
    }

    return  Math.max(maxCount, currentCount);

}

let  result = maxConsicutiveOnes([1,1,1,0,1,0]);
console.log(result); 

// max will give the big no