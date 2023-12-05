import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(16);

  // let counter = 15;

  const addValue = () => {
    if (counter >= 20) return;
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
