function sayHello() {
    console.log("Hello, Arjun!");
}


function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer=setTimeout(() => {
            fn.apply(this, args)
        },delay)
    }
}


const debouncedHello = debounce(sayHello, 2000);

debouncedHello();
debouncedHello();
debouncedHello(); // Only this call should execute after 2 seconds.
