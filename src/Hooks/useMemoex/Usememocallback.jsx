import { useState } from "react";

import React from 'react'
import ItsChild from "./ItsChild";

function Usememocallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ❌ Expensive calculation
  const expensiveValue = (() => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 500000000; i++) total += i;
    return total;
  })();

  // ❌ Function re-created on every render
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Value: {expensiveValue}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <ItsChild handleClick={handleClick} />
    </div>
  );
}

export default Usememocallback