import Button from "./components/Button";
import Register from "./components/Register";

const App = () => {
  // non parametrized function
  const handleClick = () => {
    console.log("clicked");
  };
  // parametrized function
  const handleParemeter = (e) => console.log(e);
  return (
    <div>
      <h1>{2 + 3}</h1>
      <Register />
      <Button />
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleParemeter("Hello")}>Click(params)</button>
    </div>
  );
};

export default App; /* app ko export kar rahe hai */