////////////// 🔹 Example 1: Basic Factory Function

function createUser(name, role) {
    return {
        name,
        role,
        introduce() {
            console.log(`Hi, I'm ${this.name}, and I work as a ${this.role}.`);
        }
    };
}

const user1 = createUser("Alice", "Developer");
const user2 = createUser("Bob", "Designer");

user1.introduce(); // Hi, I'm Alice, and I work as a Developer.
user2.introduce(); // Hi, I'm Bob, and I work as a Designer.

// 📌 Explanation:
// Instead of using new, we use a factory function (createUser) to create user objects.

// The introduce() method is added inside the object.

// Easier to maintain and extend.


/////////// 🔹 Example 2: Factory Pattern with Different Object Types


function carFactory(type) {
    if (type === "sedan") {
        return { type, wheels: 4, speed: "medium", drive: () => console.log("Driving smoothly...") };
    } else if (type === "sports") {
        return { type, wheels: 4, speed: "fast", drive: () => console.log("Zooming fast...") };
    } else {
        return { type, wheels: 4, speed: "unknown", drive: () => console.log("Unknown speed...") };
    }
}

const sedanCar = carFactory("sedan");
const sportsCar = carFactory("sports");

console.log(sedanCar.type); // sedan
sedanCar.drive();           // Driving smoothly...
sportsCar.drive();          // Zooming fast...


// 🔹 Example 3: Factory Pattern with Private Data


function createBankAccount(owner) {
    let balance = 0; // Private variable (not accessible directly)

    return {
        owner,
        deposit(amount) {
            balance += amount;
            console.log(`${owner} deposited $${amount}. New balance: $${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds!");
            } else {
                balance -= amount;
                console.log(`${owner} withdrew $${amount}. New balance: $${balance}`);
            }
        },
        checkBalance() {
            console.log(`Balance for ${owner}: $${balance}`);
        }
    };
}

const account = createBankAccount("Arjun");
account.deposit(100);  // Arjun deposited $100. New balance: $100
account.withdraw(50);  // Arjun withdrew $50. New balance: $50
account.checkBalance();// Balance for Arjun: $50
