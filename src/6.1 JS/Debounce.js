const log = (i) => console.log("log", i);

/* =========================
   DEBOUNCE
   Runs ONLY after calls stop
   ========================= */
function debounce(func, wait) {
  let timeoutId;

  return function (...args) {
    // Reset timer on every call
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args); // run with latest arguments
    }, wait);
  };
}

/* =========================
   THROTTLE
   Runs at MOST once per wait time
   ========================= */
function throttle(func, wait) {
  let isThrottled = false;

  return function (...args) {
    // If already throttled, ignore the call
    if (isThrottled) return;

    // Execute function immediately
    func(...args);

    // Block further calls for `wait` time
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, wait);
  };
}


const debouncedLog = debounce(log, 500);

for (let i = 0; i < 1000; i++) {
  debouncedLog(i);
}


const throttledLog = throttle(log, 500);

for (let i = 0; i < 1000; i++) {
  throttledLog(i);
}
