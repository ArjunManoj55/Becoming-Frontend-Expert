//closure

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: $${amount}, New Balance: $${balance}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient funds!");
                return;
            }
            balance -= amount;
            console.log(`Withdrew: $${amount}, Remaining Balance: $${balance}`);
        }
    };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50); // Deposited: $50, New Balance: $150
myAccount.withdraw(30); // Withdrew: $30, Remaining Balance: $120
console.log(myAccount.balance); // ❌ undefined (Private variable)
