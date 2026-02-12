import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);

  const handleClick = () => {
    setLists([...lists, inputValue]);
    setInputValue("");
  };

  const handleDelete = (indextoDelete) => {
    setLists(lists.filter((_, index) => index !== indextoDelete));
  };

  return (
    <div>
      <h1>todo</h1>
      <input
        type="text"
        placeholder="todos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleClick}>update todo</button>

      <ul>
        {lists.map((item, index) => (
          <li key={index}>
            {" "}
            {item}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
