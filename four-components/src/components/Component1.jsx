import reactLogo from "../assets/react.svg";
import "../App.css";
import "./Component1.css";
import { useCounter } from "../context/CounterContext";

function Component1() {

    const { increment, decrement } = useCounter();

  return (
    <div className="comp comp1">
      Component 1
      <img src={reactLogo} alt="React Logo" />
      <button onClick={useCounter().increment}>Increment</button>
      <button onClick={useCounter().decrement}>Decrement</button>
    </div>
  );
}

export default Component1;
