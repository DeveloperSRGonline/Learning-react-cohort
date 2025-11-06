import { useState } from "react";

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imp, setImp] = useState(false);

  const handleSubmit = (e) => {
    // avoiding page refresh
    e.preventDefault();
    // creating new todo
    const newTodo = {
      id: Date.now(),
      title: title,
      desc: desc,
      description: desc,
      important: imp,
      completed: false,
    };
    // short way to do
    // setTodos([...todos, newTodo]);

    // simplification of above line(long way to do)
    const copyTodo = [...todos];
    copyTodo.push(newTodo);
    setTodos(copyTodo);

    // clearing title ,desc and imp to initinal state
    setTitle("");
    setDesc("");
    setImp(false);
  };
  return (
    <>
      <div className="create-task-section">
        <h1>Create</h1>
        <form onSubmit={handleSubmit} className="task-form">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            type="text"
            placeholder="Description"
          />
          <div className="imp">
            <input
              className="check"
              checked={imp}
              onChange={(e) => setImp(e.target.checked)}
              type="checkbox"
              id=""
            />
            <span>Important</span>
          </div>
          <button type="submit">create task</button>
        </form>
      </div>
    </>
  );
};

export default Create;
