let n = 5;
//   let toggle = 1; //if no need to refresh

for (let i = 0; i < n; i++) {
  let row = "";
//   let toggle = 1;

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;

    //switch toggle
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }

  console.log(row);
}
// 1
// 10
// 101
// 1010
// 10101

// 1
// 01
// 010
// 1010
// 10101