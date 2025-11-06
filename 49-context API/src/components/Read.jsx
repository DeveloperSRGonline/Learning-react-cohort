import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const Read = ({ todos, setTodos }) => {
  const listContainerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    console.log(updatedTodos);
    setTodos(updatedTodos);
    toast.error('Task deleted successfully!')
  };

  const renderTodos = () => {
    return todos.map((todo) => (
      <li key={todo.id} className={"task-item"}>
        <div className="task-content">
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
          <span className={`i ${todo.important ? "tomato" : ""}`}>
            {todo.important ? "Important" : "Not Important"}
          </span>
        </div>
        <button onClick={() => handleDelete(todo.id)} className="delete-btn">
          Delete
        </button>
      </li>
    ));
  };
  return (
    <>
      <div className="all-tasks-section">
        <h1>All Tasks</h1>
        <ul ref={listContainerRef} className="tasks-list">
          {renderTodos()}
        </ul>
      </div>
    </>
  );
};

export default Read;
