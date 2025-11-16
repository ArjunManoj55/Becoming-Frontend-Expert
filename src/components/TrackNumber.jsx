import React, { useEffect, useState } from "react";

function TrackNumber() {
  const [count, setCount] = useState(0);
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    // increment replay whenever count changes
    setReplay((prev) => prev + 1);
  }, [count]);

  const changeNo = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={changeNo}>Change</button>
      <h3>Count: {count}</h3>
      <h1>Re-render Count: {replay}</h1>
    </div>
  );
}

export default TrackNumber;
