'use client'

import Link from "next/link"

export default function error(){
    function getrandomnumber(count:number){
            return Math.floor(Math.random()*count);
    }
    return(
        <div>
            <p>error in detail page</p>
            <Link href="/detail">Detail</Link>
        </div>
    )
}