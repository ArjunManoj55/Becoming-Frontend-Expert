//CALLBACK - hell , PYRAMID OF DOOM

const cart = ["shoes", "pants", "kurthas"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummery(function () {
      api.updateWallet();
    });
  });
});

// one call back inside other so it starts to grow horizontally - unmaintanable

//INVERSON OF CONTROLL - LOOSING CONTROLL OVER CODE

// HERE WE ARE GIVING CONTROLL OVER ONE API AND BLINDLEY TRUSTING IT 
// LIKE WE DONT KNOW WHATS IS INSIDE createOrder AND IT CAN CASUSE TO RUN NEXT FUNCTION TWICE OR CRASH IT

