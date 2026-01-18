const cart = ["shirt", "pants", "shoes"];

//create order promise

const orderPromise = createOrder(cart);

//consume promise
orderPromise
    .then(function(orderId) {
        console.log("orderid", orderId )
        proceedToPayment(orderId);
    })
    .catch(function(error) {
        console.log("err" , error.message);
    })


function createOrder(cart) {
    return new Promise(function(resolve, reject) {
        //reject
        if(!validateCart(cart)) {
            reject(new Error("rejected"))
            return;
        }
        //validate
        const orderId = 1234;
        //resolve
        resolve(orderId);
    })
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    console.log("Proceeding to payment for order:", orderId);
}
