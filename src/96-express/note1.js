// middlewares

function middlewareOne(req, res, next) {
    console.log("1")
    next()
})  

function middlewareTwo(req, res) {
    console.log("1")
    
})  

//1 2

//clean way
app.get("/route", middlewareOne, middlewareTwo, function(req, res) {
    console.log("1")

    res.send("hello")
    
});



