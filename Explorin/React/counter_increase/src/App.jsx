import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div >
      <h1><button>{count}</button></h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <button onClick={() => setCount((count) => count - 1)}>decrement</button>
      </div>
    </div>
  )
}

