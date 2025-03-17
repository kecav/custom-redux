import { useReducer } from "react";
import "./App.css";
import { INCREMENT, DECREMENT, reducer } from "./redux/reducer";

function App() {
  const [count, dispatch] = useReducer(reducer, { count: 0 });
  console.log("printed");
  return (
    <>
      <h1>{count.count}</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: INCREMENT })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: DECREMENT })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
