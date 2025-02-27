import { useState } from "react"

export default function CheckNo () {

const [number, setNumber] = useState("")
const [output, setOutput] = useState("")

const checkNo = () => {
    if (number === "") {
        setOutput("enterda")
        return;
    } else if (number > 0) {
       
        setOutput("positive")

    } else if (number < 0) {
        setOutput("neg")
    } else {
        setOutput("zero")
    }
    
}

return(
    <>
    {/* input */}
    <input type="number"
    value={number}
    placeholder="no?"
    onChange={(e) => setNumber(e.target.value)}

    />
    {/* button&output */}
    <button onClick={checkNo}>click</button>
    <h3>{output}</h3>
    </>
)
};