import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="content">
        <h1>Counter: {counter}</h1>
        <button className="button-add" onClick={() => dispatch(increment(5))}>
          +
        </button>
        <button
          className="button-subtract"
          onClick={() => dispatch(decrement(2))}
        >
          -
        </button>

        {isLogged ? <h3>Valuble information I shouldn't seeee</h3> : ""}
      </div>
    </div>
  );
}

export default App;
