function printStars(x) {
  for (let i = 0; i < x; i++) {
    let row = "";
    for (let j = 0; j < x - i; j++) {
      row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

printStars(5);

//      *
//     **
//    ***
//   ****
