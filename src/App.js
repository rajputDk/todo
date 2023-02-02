import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState();
  const [toggleSubmit, setToggleSubmit] = useState(true);

  //adding Task
  function AddTask(e) {
    if (task !== "") {
      setTaskList([...taskList, { task, id: `${task}-${Date.now()}` }]);
      setTask("");
    }
    if (editId) {
      const editTask = taskList.find((i) => i.id === editId);
      const updatedTasks = taskList.map((t) =>
        t.id === editTask.id
          ? (t = { id: t.id, task })
          : { id: t.id, task: t.task }
      );
      setTaskList(updatedTasks);
      setEditId("");
      return setToggleSubmit(true);
    }
  }
  const deleteTodo = (id) => {
    const newList = taskList.filter((t) => t.id !== id);
    setTaskList([...newList]);
  };
  // Editing Task
  const handleEdit = (id) => {
    const editTask = taskList.find((i) => i.id === id);
    setTask(editTask.task);
    setEditId(id);
    setToggleSubmit(false);
  };

  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      AddTask(e);
    }
  };
  return (
    <div>
      <div className="main-container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div onKeyDown={handleKeydown}>
          <input
            type="text"
            id="in"
            placeholder="Add Here"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          {toggleSubmit ? (
            <button className="btn" onClick={AddTask}>
              Add
            </button>
          ) : (
            <button className="btn" onClick={AddTask}>
              Update
            </button>
          )}
        </div>
        <div className="list">
          {taskList.map((task) => {
            return (
              <>
                {" "}
                <span className="htt" key={task.id}>
                  {task.task}
                  <div className="bt">
                    <button
                      className="btn1"
                      onClick={() => deleteTodo(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn2"
                      onClick={() => handleEdit(task.id)}
                    >
                      Edit
                    </button>
                  </div>
                </span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
