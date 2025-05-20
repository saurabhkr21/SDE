import React, { useEffect, useState } from 'react'

export default function App() {
  // let currentCount = 0;
  // console.log('App component rendered');
  // const [currentCount, setCurrentCount] = useState(function initval(){
  //   return{
  //     count: 0,
  //   };
  // });


  // function incrementValue(val) {
  //   val.count=val.count+1;
  // }

  // function increment() {
  //   setCurrentCount((prev)=>{
  //     let val =structuredClone(prev);
  //     incrementValue(val);
  //     console.log(prev);
  //     return val;
  //   });
  //   console.log(currentCount);
  // }

  // function handleIncrement() {
  //   increment();
  // }

  // function effectCallBackfn() {
  //   console.log('effectCallBackfn');
  // }
  // useEffect(effectCallBackfn,);

  // function useEffect(fn, deps="all") {
  //   console.log('useEffect called');
  //   const [state, setState] = useState(fn);
  //   return state;
  // }

  const[count, setCount] = useState(0);

  var time = 0;


  // const timer = setInterval(() => {

  //   console.log('timer', ++time);
  // },20000);

  // function clearInterval() {
  //   clearInterval(timer);
  // }

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('timer', ++time);
    }
    , 2000);
    return () => {
      clearInterval(timer);
    }
  },)

  return (
    <div className='w-screen App flex flex-col items-center justify-center '>

      <h1 className='flex flex-col item-center justify-center' >Simple Counter</h1>
      <span className='  '>Count: {count}</span>
      <button onClick={()=>setCount(count +1 )} >Increment</button>


    </div>
  )
}



















//usestate


// import React, { useState } from 'react'

// export default function App() {
//   // let currentCount = 0;
//   console.log('App component rendered');
//   const [currentCount, setCurrentCount] = useState(function initval(){
//     return{
//       count: 0,
//     };
//   });


//   function incrementValue(val) {
//     val.count=val.count+1;
//   }

//   function increment() {
//     setCurrentCount((prev)=>{
//       let val =structuredClone(prev);
//       incrementValue(val);
//       console.log(prev);
//       return val;
//     });
//     console.log(currentCount);
//   }

//   function handleIncrement() {
//     increment();
//   }
//   return (
//     <div className='flex flex-col items-center justify-center '>

//       <h1 className='flex flex-col item-center justify-center' >Simple Counter</h1>
//       <span className='  '>Count: {currentCount.count}</span>
//       <button onClick={increment} >Increment</button>


//     </div>
//   )
// }
