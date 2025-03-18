async function fetchData() {
    console.log("Fetching data...");
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json(); // Wait for JSON conversion
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
