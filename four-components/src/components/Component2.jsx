import viteLogo from '/vite.svg'
import '../App.css'
import './Component2.css'
import { useCounter } from "../context/CounterContext";

function Component2() {

    const { count, reset } = useCounter();

    return (
      <div className="comp comp2">
        Component 2
        <img src={viteLogo} alt="Vite Logo" />
        <h1>{count}</h1>
        <button onClick={reset}>Reset</button>
      </div>

    );
  }
  
  export default Component2;
  