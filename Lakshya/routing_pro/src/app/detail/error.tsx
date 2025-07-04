'use client'

import Link from "next/link"

export default function error(){
    return(
        <div>
            <p>error in detail page</p>
            <Link href="/detail">Detail</Link>
        </div>
    )
}