import './App.css';
import { useState } from "react";

function App(): JSX.Element {
  // Initialize
  const initCounterVar: number = 0;
  const [counterVar, setCounterVar] = useState<number>(initCounterVar); // 👈 Hook `useState` the actual variable & function to mutate the variable

  // Functions
  const increaseCounterVar = (): void => { setCounterVar(counterVar + 1) }; // 👈 Example of using the mutate
  const decreaseCounterVar = (): void => { setCounterVar(counterVar - 1) };

  // Render
  return (
    // Usage here on the event `onClick` 👇
    <div className="App">
      <button onClick={increaseCounterVar}>increase</button>
      <button onClick={decreaseCounterVar}>decrease</button>
      <button onClick={(): void => setCounterVar(initCounterVar)}>reset</button> {/* Possible to passe defined or lambda function inside the event */}
      {counterVar}
    </div>
  );
};

export default App;
