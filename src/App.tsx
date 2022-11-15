import { createContext, useState } from "react";
import "./App.css";
import Multiplier from "./Components/Multiplier";
import Subtraction from "./Components/Subtraction";
import Divider from "./Components/Divider";
import Counter from "./Components/Counter";

export const CounterContext = createContext({
  counter: 1,
  increment: () => {},
  decrement: () => {},
});
function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <CounterContext.Provider
        value={{
          counter,
          increment: () => setCounter(counter + 1),
          decrement: () => setCounter(counter - 1),
        }}
      >
        <Multiplier />
        <Subtraction />
        <Divider />
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
