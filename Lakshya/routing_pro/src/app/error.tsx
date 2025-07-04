'use client'
import { error } from "console";
import Link from "next/link";

export default function Error(){
    // throw new error()
    return(
        <div className=" flex flex-col gap-7 p-1.5 bg-red-300 h-screen">
            <h2>Something Error</h2>
            <p>Rendering</p>
            {/* <p>{Error.message}</p> */}
            <a href="/">Home</a>
        </div>
    );
}