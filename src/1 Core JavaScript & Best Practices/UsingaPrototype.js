// 📌 Understanding Prototypes in JavaScript
// In JavaScript, prototypes allow objects to inherit properties and methods from other objects. Every JavaScript function has a prototype property, and when an object is created from a function, it gets access to the properties and methods defined on that function’s prototype.

// 🚀 Key Concepts Before Diving In
// 1️⃣ Prototype Chain → Objects in JavaScript have an internal link (__proto__) to another object (its prototype).
// 2️⃣ Object Inheritance → If an object doesn’t have a property, JavaScript looks up the prototype chain to find it.
// 3️⃣ Constructor Functions → Functions that create objects and set their prototype.

//constructorfunction
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const john = new Person("John", 25);
  john.greet(); // Hello, my name is John
  