import { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleCount() {
    const result = text.trim().split(" ").length;
    setCount(result);
  }

  return (
    <div className="App">
      <h1>WORD COUNTER</h1>
      <textarea
        placeholder="Type your sentences here..."
        onChange={(event) => setText(event.target.value)}
      ></textarea>
      <button onClick={handleCount}>Count</button>
      <p>result {count}</p>
    </div>
  );
}
