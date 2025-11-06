import { useEffect, useRef, useState } from "react";
import "./App.css"; // Make sure the CSS is imported
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="app-container">
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
