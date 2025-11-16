import { useState } from "react";

export default function Oddeven() {

    const [number, setNumber] = useState("")
    const [result, setResult] = useState("")

    // function
    const checkFunc = () => {
        if (number === "") {
            setResult("enter no")
            return;
            }
            setResult(number % 2 === 0 ? "even" : "odd")
        }

     return (
        <>
        {/* input */}
        <input type="number" 
        value={number}
        placeholder="enter here"
        onChange={(e) => setNumber(e.target.value)}
        />
        {/* button and output */}
        <button onClick={checkFunc}>check</button>
        <h3>{result}</h3>
        </>
    );
};


