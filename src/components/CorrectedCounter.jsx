import React, { useEffect, useEffectEvent, useState } from 'react'

function CorrectedCounter() {
    const [count,setCount] = useState(0);
    const onTick = useEffectEvent(()=>{
        console.log("count: ",count);
    })
    useEffect(()=>{
            const id = setInterval(()=>{
                console.log("Count: ",count);
            },1000);
    
            return () => clearInterval(id);
        },[]);
  return (
    <div>
        <h1>CorrectedCounter</h1>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increase by 1</button>
    </div>
  )
}

export default CorrectedCounter