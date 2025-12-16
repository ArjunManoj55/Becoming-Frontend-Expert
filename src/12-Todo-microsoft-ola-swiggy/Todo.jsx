import React, { useState } from "react";
import "../12-Todo-microsoft-ola-swiggy/page.css";

function Todo() {
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState([]);

  const addToList = () => {
    const item = {
      id: list.length + 1,
      text: tasks,
      completed: false,
    };
    setList((prev) => [...prev, item]);
    //empty after adding
    setTasks("");
  };

  //toggle strike
  const toggleCompleted = (id) => {
    setList(
      list.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  //delete
  const handleDelete = (id) => {
    setList(list.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        type="text"
        placeholder="enter todo"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
      <button onClick={() => addToList()}>add</button>

      <ul>
        {list.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strike" : ""}>{t.text}</span>
            <button onClick={() => handleDelete(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
