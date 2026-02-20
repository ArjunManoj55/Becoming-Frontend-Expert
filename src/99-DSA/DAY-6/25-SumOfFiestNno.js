function sumOfNnumbers(n) {

    if ( n == 0) return 0;

    return n + sumOfNnumbers(n-1); // 5 + sum of 4
    

}

console.log(sumOfNnumbers(5)); 