// 👉 Only one instance is created throughout the program.
// 👉 Any attempt to create a new instance returns the existing one.

// 🔹 Why Use the Singleton Pattern?
// ✅ Saves Memory → Prevents multiple unnecessary instances.
// ✅ Global State Management → Useful for caching, logging, configuration, etc.
// ✅ Ensures Data Consistency → One instance means shared data.
// ✅ Avoids Duplicate Connections → Useful for database connections.

const Singleton = (function () {
    let instance; // Private variable to store the single instance

    function createInstance() {
        return { name: "I am the only instance!" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true (Same instance)
console.log(obj1.name); // "I am the only instance!"


// Singleton for Database Connection///////////////


class Database {
    constructor(connectionString) {
        if (Database.instance) {
            return Database.instance; // Return the existing instance
        }

        this.connection = `Connected to ${connectionString}`;
        Database.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

const db1 = new Database("mongodb://localhost:27017");
const db2 = new Database("postgres://localhost:5432");

console.log(db1.getConnection()); // Connected to mongodb://localhost:27017
console.log(db2.getConnection()); // Connected to mongodb://localhost:27017
console.log(db1 === db2); // true (Same instance)
