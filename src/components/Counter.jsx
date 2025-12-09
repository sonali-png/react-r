import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const id = setInterval(()=>{
            console.log("Count: ",count);
        },1000);

        return () => clearInterval(id);
    },[count]);

  return (
    <div>
        <h1>Counter</h1>
        <p>Count = {count}</p>
        <button onClick={()=>setCount(count + 1)}>Increase by 1</button>
    </div>
  )
}

export default Counter