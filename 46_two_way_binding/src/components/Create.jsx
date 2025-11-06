import React, { useState } from "react";

const Create = ({onSubmit}) => {
  // variables 
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  // submit handle logic
  const handleSubmit = (e) => {
    e.preventDefault();// reload stopped
    onSubmit({ name, age })// send data to parent
    setAge("")// make it blank
    setName("")// make it blank
  };
  return (
    <div >
      <h1>User input:</h1>
      <form onSubmit={handleSubmit} action="">
        <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <input 
        type="number" 
        placeholder="Enter your age" 
        onChange={(e) => setAge(e.target.value)}
        value={age}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
