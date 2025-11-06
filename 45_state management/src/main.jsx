// importing createRoot from react-dom/client it do that
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

//hum react ko bo rahe ki(createRoot) jo root naam ka div hai uske andar app ko render kar do
// <App /> is noting but the App() app ko call kiye hai bas react mein aise hi call karte hai 
