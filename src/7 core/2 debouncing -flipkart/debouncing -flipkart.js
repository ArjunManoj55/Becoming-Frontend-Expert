let counter = 0;

const getData = () => {
    console.log("fetching data...", counter++);
};

const debounce = function(fn, delay) {
    let timer; // store timer for all future calls

    return function(...args) {
        const context = this;

        clearTimeout(timer); // clear old timer

        timer = setTimeout(() => {
            fn.apply(context, args); // execute with latest args
        }, delay);
    };
};

const betterFunction = debounce(getData, 300);
