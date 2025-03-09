function createCalculator(initialValue) {
    let value = initialValue;
    


    return{

        add: function (num) {
            value= value+num
            console.log(value)
        },



    }
}


const calculator = createCalculator(10);
calculator.add(5);