import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      title: newTask,
    };
    setTaskList((prev) => [...prev, item]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    const newArray = taskList.filter((item) => {
      item.id !== id;
    });
    setTaskList(newArray);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <input
        id="task"
        type="text"
        placeholder="Add Task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {taskList.map((item) => {
          return (
            <li key={item.id}>
              <Task name={item.title} />
              <button onClick={deleteTask}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
