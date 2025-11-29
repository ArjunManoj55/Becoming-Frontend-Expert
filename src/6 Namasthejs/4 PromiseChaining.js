const cart = ["shirt", "pants", "shoes"];


createOrder(cart)
.then(function (orderId) { //if resolve
  console.log(orderId);
  return orderId;
  
})
.then(function() {
    return proceedToPayment(orderId)
})
.then(function(paymentInfo) {
    console.log(paymentInfo)
})
.catch(function(err) { //if rejected , put catch in bw the .thens it will only have to check top of it so the rest .then will work, so we can use catch for finding bugs 
    console.log(err.message); //use more cathes
})

//-------- creating promise part

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {

    //reject
    if (!validateCart(cart)) {
      const err = new Error("cart not valid");
      reject(err);
    }

    //create oreder resolve
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart) {
    return true; // if false it cause error so we need error handling
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("payment successful");
    })
}