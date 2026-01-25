function reverseInteger(n) {

    let original = n;
    let rev = 0;

    n= Math.abs(n);

    while( n > 0) {
        let rem = n % 10 ;
        rev = 10*rev + rem;
        n = Math.floor(n / 10);
    }

    return (original < 0? -rev : rev);
    

}

let result = reverseInteger(123);
console.log(result);
