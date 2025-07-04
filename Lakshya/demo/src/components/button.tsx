import { title } from "process";
import { useState } from "react";

export default function Button() {
    const[name,setName]=useState('');
    const [displayName,setDisplayName]=useState('');
    const handleClick=()=>{
        setDisplayName(name);
    }
    const handleClick1=()=>{
        setDisplayName('');
    }
    return (
        <div>
            <h3>Set Name:<h1>{displayName}</h1></h3>
            <input value={name} type="text"
            onChange={(e)=> setName(e.target.value)}
            placeholder="Enter Your Name" />
            <button onClick={handleClick}>Set</button>
            <button onClick={handleClick1}>UnSet</button>
        </div>
    );
}