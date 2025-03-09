//prototype
// Use case: Save memory by adding a method to User.prototype instead of each instance.

function User(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype
User.prototype.sayHello = function() {
    console.log(`Hello, I am ${this.name}, and I am ${this.age} years old.`);
};

const user1 = new User("Arjun", 25);
const user2 = new User("Manoj", 30);

user1.sayHello(); // Hello, I am Arjun, and I am 25 years old.
user2.sayHello(); // Hello, I am Manoj, and I am 30 years old.
