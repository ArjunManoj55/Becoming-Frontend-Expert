// ----------------------
// Sample cart data
// ----------------------
const cart = ["shirt", "pants", "shoes"];

// ----------------------
// Create order (Producer)
// ----------------------
const orderPromise = createOrder(cart);

// ----------------------
// Consume the promise
// ----------------------
orderPromise
  .then(function (orderId) {
    // Runs when the promise is resolved
    console.log("Order ID:", orderId);
    proceedToPayment(orderId);
  })
  .catch(function (error) {
    // Runs when the promise is rejected
    console.error("Error:", error.message);
  });

// ----------------------
// Function to create an order
// Returns a Promise
// ----------------------
function createOrder(cart) {
  return new Promise(function (resolve, reject) {

    // Step 1: Validate the cart
    if (!validateCart(cart)) {
      reject(new Error("Cart is not valid"));
      return; // stop further execution
    }

    // Step 2: Create order
    const orderId = "12345"; // mock order id

    // Step 3: Resolve the promise with order ID
    resolve(orderId);
  });
}

// ----------------------
// Cart validation function
// ----------------------
function validateCart(cart) {
  // Return false to simulate validation failure
  return true;
}

// ----------------------
// Mock payment function
// ----------------------
function proceedToPayment(orderId) {
  console.log("Proceeding to payment for order:", orderId);
}
