function orderProcess () {
    return new Promise ((resolve) => {
        setTimeout (() => {
            console.log ("Order placed! 🍽")
            resolve();
        },3000)
    })
}

function bPreparing() {
    return new Promise ((resolve)=> {
        setTimeout (() => {
            console.log("Food is being prepared... 🍳")
            resolve();
        },5000)
    } )
}

function orderReady() {
    return new Promise ((resolve)=> {
        setTimeout (() => {
            console.log("Pizza is ready for delivery 🚚")
            resolve();
        },1000)
    } )
}

orderProcess()
    .then(bPreparing)
    .then(orderReady)
    .then(()=>(console.log("Order completed! 🎉")))