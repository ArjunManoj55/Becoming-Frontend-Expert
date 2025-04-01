//more clean promises 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function orderPizza() {
    console.log("Order placed! 🍽");
    await delay(3000);

    console.log("Food is being prepared... 🍳");
    await delay(5000);

    console.log("Pizza is ready for delivery 🚚");
    await delay(1000);

    console.log("Order completed! 🎉");
}

orderPizza();
