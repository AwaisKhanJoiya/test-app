import { useContext } from "react";
import { CounterContext } from "../App";

const Counter = () => {
  const { counter, increment, decrement } = useContext(CounterContext);

  return (
    <div className="component-container counter">
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
      <h4>{counter}</h4>
      <button className="btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
