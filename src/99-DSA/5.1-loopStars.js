function printStars(x) {
    for( let i = 0 ; i < x ; i++ ) {
        let row = " ";
       for( let j = 0 ; j < x ; j++ ){
        row = row + "*";
       }
       console.log(row);
    } 
}

printStars(2)


//  *****
//  *****
//  *****
//  *****
//  *****