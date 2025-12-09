import { useState, useMemo, useCallback } from "react";

import React from 'react'
import ItsChild from "./ItsChild";

function Anditsprevention() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ useMemo → caches result unless count changes
  const expensiveValue = useMemo(() => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 500000000; i++) total += i;
    return total;
  }, [count]); 
  // Changes only when count changes

  // ✅ useCallback → prevents re-creation of function
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); 
  // Never changes

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

export default Anditsprevention