// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from "react";

// export default function App() {
//   return (
//     <div>
//       <div className='card1 bg-red-300  rounded-lg-xl'>
//       sample data
//     </div>
//     <div className='card1 card2 w-1.5/2 bg-blue-300'>
//       sample data
//     </div>
//     <div className='card1'>
//       sample data klj
//     </div>


//     </div>
//   )
// }

import React from 'react'

export default function App() {
  return (
    <div className='w-screen h-screen bg-[#fffff9] flex justify-center items-center'>
      <div className='border-3 w-[500px] h-[350px] rounded-4xl bg-[#00000020] rounded-black flex flex-col justify-evenly items-center'>
        <span className=' text-8xl '>Hello there</span>
        <button className=' text-7xl border-1 rounded-3xl p-5.5 bg-amber-600 border-red-400 flex flex-col justify-evenly items-center'>Click Me</button>

      </div>
    </div>
  )
}
