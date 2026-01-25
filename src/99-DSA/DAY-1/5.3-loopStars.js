function printStars(x) {
    for( let i = 0 ; i < x ; i++ ) {
        let row = " ";
       for( let j = 0 ; j < x-i  ; j++ ){
        row = row + "*";
       }
       console.log(row);
    } 
}

printStars(4)


//  ****
//  ***
//  **
//  *