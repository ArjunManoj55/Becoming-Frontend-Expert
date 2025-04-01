////////////////////////// DEBOUNCE //////////////////////////////////////////////

//Ensures a function runs only after a delay, preventing multiple API calls.

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function fetchResults(query) {
    console.log("Fetching API for:", query);
}

const optimizedSearch = debounce(fetchResults, 5000);

optimizedSearch("Hello");
optimizedSearch("Hello, World"); // Only this call runs after 500ms

//--------------- eg --------------------------

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

debouncedHello(); // call 1 go on and get stages for 2 sec
debouncedHello(); //call 2 go on and clear call1 and stages for next 2 sec
debouncedHello(); // clear call 2 Only this call should execute after 2 seconds.


///////////////////////////////////// THROTTLING /////////////////////////////////////////

//Throttling (Optimize Button Clicks) Ensures a function runs at most once per interval, preventing excessive API requests.
//Optimizing Scroll Events (Infinite Scroll, Lazy Loading), reducing unnecessary UI updates.
//(Prevent Multiple Submissions)

function throttle(fn, interval) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= interval) {
            fn(...args);
            lastTime = now;
        }
    };
}

function handleClick() {
    console.log("Button clicked!");
}

const optimizedClick = throttle(handleClick, 1000);

document.addEventListener("click", optimizedClick); // Click event optimized


////////////////////////////////// CATCHING ////////////////////////////////////////////////

//Caching API Responses (Prevent Unnecessary API Calls) Caches API results to improve performance.
//Caching means storing data so that we can reuse it instead of making a new request every time.


const cache = new Map();

async function fetchWithCache(url) {
    if (cache.has(url)) {
        console.log("Returning from cache:", url);
        return cache.get(url);
    }

    console.log("Fetching from API:", url);
    let response = await fetch(url);
    let data = await response.json();
    cache.set(url, data);
    return data;
}

fetchWithCache("https://jsonplaceholder.typicode.com/posts/1");
fetchWithCache("https://jsonplaceholder.typicode.com/posts/1"); // Cached response
