//@ts-nocheck
'use client'
import React from 'react'
import setCookies from '../action'

export default function Button() {
    return (
        <div>
            <button
            className='bg-blue-500 text-white px-4 py-2 rounded'
            onClick={() => { setCookies() }}>Cookies</button>
        </div>
    )
}
