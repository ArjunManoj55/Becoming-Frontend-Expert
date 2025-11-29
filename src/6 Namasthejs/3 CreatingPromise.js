const cart = ["shirt", "pants", "shoes"];

const promise = createOrder(cart);

//consuming part

promise.then(function (orderId) { //if resolve
  console.log("orderid");
  proceedToPayment(orderId);
})
.catch(function(err) { //if rejected
    console.log(err.message);
})

//-------- creating part

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
