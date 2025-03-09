// 🚀 Task for You
// 1️⃣ Create a Car constructor function with brand and speed properties.
// 2️⃣ Add a drive method using Car.prototype that logs the speed.
// 3️⃣ Create an instance and call drive().

//constructur func
function Car(brand,speed) {
    this.brand = brand;
    this.speed = speed;
}

//method
Car.prototype.logspeed = function() {
    console.log(`car ${this.brand} speed ${this.speed}`)
}
//accelerate method
Car.prototype.accelerate = function() {
    this.speed = this.speed+10;
    console.log(`afteracc${this.speed}`);
}

const out = new Car("bmw",120);
out.logspeed();
out.accelerate();

// 🔥 Next Challenge for You
// Enhance your Car prototype:

// Add a method accelerate() that increases speed by 10.
// Add a method brake() that decreases speed by 10.
// Log the new speed after calling these methods.