function twoSum(arr, target) {
    const seen = new Map();
    for(let i = 0; i < arr.length; i++) {
        const need = target - arr[i]
        if(seen.has(need)) return [seen.get(need), i];
        seen.set(arr[i], i);
    }
    return[];
}

console.log(twoSum([2, 7, 11, 15], 9));