import { useState } from "react";

function ToDoComp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const onSaveFunc = () => {
    if (task.trim() === "") return; // ignore empty tasks
    setList([...list, task]);
    setTask("");
  };

  const removeTask = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={onSaveFunc}>Add</button>

      <ul style={{ listStyleType: "none", padding: 0, marginTop: "10px" }}>
        {list.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "6px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>{item}</span>
            <button onClick={() => removeTask(index)}>❌ Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoComp;
