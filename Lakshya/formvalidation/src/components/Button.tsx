'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function Button() {
    const { pending } = useFormStatus();
    return (
        <div>
            <button>{
                !pending ? 'Submit' : 'Submitting...'
            }</button>
        </div>
    )
}
