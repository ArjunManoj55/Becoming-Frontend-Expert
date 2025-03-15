const cache = {}; // Store previous results

function addNumbers(a, b) {
    let key = `${a},${b}`; // Create a unique key

    if (cache[key]) { //if false line 11 executes
        console.log("⏳ Using Cached Value:", cache[key]);
        return cache[key]; // Return stored result
    }

    let result = a + b;  // Calculate sum
    cache[key] = result; // Store in cache
    console.log("✅ Calculated:", result);
    return result;
}

addNumbers(5, 5); // ✅ Calculated: 10
addNumbers(5, 5); // ⏳ Using Cached Value: 10



////////////////////////////REAL WORLD///////////////////////////////////


const cache = {}; // Store previous results
const API_KEY = "your_real_api_key_here"; 

async function fetchWeather(city) {
    if (!city) {
        console.log("⚠️ Enter a valid city name!");
        return;
    }

    // ✅ Check if the city data is already in cache
    if (cache[city]) {
        console.log("⏳ Using Cached Data:", cache[city]);
        return cache[city];
    }

    try {
        // ✅ Fetch weather from API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) throw new Error(`Error ${response.status}: City not found`);
        
        const data = await response.json();
        
        // ✅ Store result in cache
        cache[city] = data.main.temp;  
        console.log("✅ Fetched from API:", data.main.temp);
        return data.main.temp;
        
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

// **Test the function**
fetchWeather("Mumbai");  // ✅ Fetched from API
fetchWeather("Mumbai");  // ⏳ Using Cached Data

