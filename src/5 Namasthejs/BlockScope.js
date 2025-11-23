{
  //BLOCK - multiple js statements combined / GROUPED
}
//SO WE CAN USE ALL OF THESE WHRE JS EXPECT AS A SINGLE STATEMENT


var a = 100;
let b = 200;
const c = 300;

{
  var a = 10; // NOT shadowing → replacing the same variable
  let b = 20; // NEW block-scoped variable
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // 10 → because var overwrote the outer variable
console.log(b); // ERROR → block scoped
console.log(c); // ERROR → block scoped

// 10
// 200
// 300

// we can shadow let using let inside a block