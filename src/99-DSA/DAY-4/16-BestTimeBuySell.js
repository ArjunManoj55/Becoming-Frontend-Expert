function maxProfit(arr) {
    // Minimum price seen so far (buy price)
    let minPrice = Infinity;

    // Maximum profit possible
    let maxProfit = 0;

    // Loop through prices
    for (let i = 0; i < arr.length; i++) {
        // Update minimum price if lower price found
        if (arr[i] < minPrice) {
            minPrice = arr[i];
        } 
        // Calculate profit if sold today
        else {
            let profit = arr[i] - minPrice;
            // Update max profit
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

let result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result); 
