import React from 'react';
import { useState } from 'react'




function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button >
         {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
         -
        </button>
        
      </div>
    </>
  )
}
export default Counter;
