// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//       console.log(`Outer said: ${outerVariable}, Inner said: ${innerVariable}`);
//     };
//   }
  
//   const newFunction = outerFunction("Hello");
//   newFunction("World"); 
  
function creatCounter() {
    let count = 0; //after closure saved it returnd


    return {

        increment: function () {
            count++;
            console.log(count);
            
        },

        decrement: function () {
            count--;
            console.log(count);
        },

    }

}

const counter = creatCounter();
counter.increment();
counter.increment();
counter.decrement();