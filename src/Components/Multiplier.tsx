import { useContext } from "react";
import { CounterContext } from "../App";

const Multiplier = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div className="component-container">
      <h4>-5*{counter}</h4>
      <div className="side-component">{-5 * counter}</div>
    </div>
  );
};

export default Multiplier;
