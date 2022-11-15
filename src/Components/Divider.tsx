import { useContext } from "react";
import { CounterContext } from "../App";

const Divider = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div className="component-container">
      <h4>21/{counter}</h4>
      <div className="side-component">{21 / counter}</div>
    </div>
  );
};

export default Divider;
