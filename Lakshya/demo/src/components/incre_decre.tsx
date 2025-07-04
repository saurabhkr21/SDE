import { useState } from "react";

export default function Counter() {

const [count,setCount]=useState(0);

    function handleClick() {
        setCount((count)=>count+1)
    }
    function handleClick2(){
        setCount((count)=>count-1)
    }
    

    return (
        <div >
            <h1>{count}</h1>
            <button
            onClick={handleClick}>Increment</button>
            <button
            onClick={handleClick2}>Decrement</button>
            
        </div>
    );
}