// before promise

const cart = ["shirt", "pants", "shoes"];

createOrder(cart); //create an order id

proceedToPayment(orderId);

//how its done
createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
}); //this cause calbackhell


// in promise-----------------------------

const promise = createOrder(cart); //{data: undefined} but it will be filled later , 
// createOrder api can take whatever time
//but the program will strat executing so meannwhile promise will be filled after some time

promise.then(function(orderId) {
    proceedToPayment(orderId);
}); // so after promise got filled this will execute


//---------------interview

// object represents eventual completion of an async operation 

//clean way

createOrder(cart) 
    .then(function(orderId) {
       return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
       return showOrderSummery(paymentInfo);
    })
     .then(function(paymentInfo) {
       return updateWallet(paymentInfo);
    })