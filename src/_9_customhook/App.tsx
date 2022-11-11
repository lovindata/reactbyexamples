import "./App.css";
import { useCount } from "./useCount";

function App(): JSX.Element {
  // Use the custom hook
  // const [counter, increase, decrease, reset] = useCount(); // If `array` version
  const {
    currentCount: counter,
    increaseCount: increase,
    decreaseCount: decrease,
    resetCount: reset,
  } = useCount(5); // If `object` version

  // Render
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={increase}>Increase!</button>
      <button onClick={decrease}>Decrease!</button>
      <button onClick={reset}>Reset!</button>
    </div>
  );
}

export default App;
