import React, { useState } from "react";

function App() {
  const state = useState(0);
  // const rgb = [9, 132, 277];
  // destructing
  const [count, setCount] = useState(0);
  const [red, green, blue] = [9, 132, 277];

  console.log(state);

  function add() {
    setCount(count + 1);
  }

  function substract() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
    </div>
  );
}

export default App;
