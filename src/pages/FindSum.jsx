import React, { useState } from "react";

function FindSum() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          num1: Number(num1),
          num2: Number(num2),
        }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error calculating sum:", error);
    }
  };

  return (
    <div>
      <h2>Find Sum</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={handleCalculate}>Calculate</button>

      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default FindSum;
