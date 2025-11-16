// basic

import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;


// real use

import React from "react";
import useCounter from "./useCounter";

function CounterComp() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComp;
