// 1️⃣ Simulating a Pizza Order (Promise Chaining) 🍕

function orderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order placed ✅");
            resolve();
        }, 2000);
    });
}

function preparePizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pizza is being prepared... 🍕");
            resolve();
        }, 3000);
    });
}

function deliverPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pizza is ready for delivery 🚚");
            resolve();
        }, 1000);
    });
}

// Chaining Promises
orderPizza()
    .then(preparePizza)
    .then(deliverPizza)
    .then(() => console.log("Order completed! 🎉"));
