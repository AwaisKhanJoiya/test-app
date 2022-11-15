import { useContext } from "react";
import { CounterContext } from "../App";

const Subtraction = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div className="component-container">
      <h4>4-{counter}</h4>
      <div className="side-component">{4 - counter}</div>
    </div>
  );
};

export default Subtraction;
