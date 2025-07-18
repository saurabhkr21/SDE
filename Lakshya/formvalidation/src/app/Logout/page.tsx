import React from 'react'

export default function page() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Logout</h1>
            <p className="mt-4">You have been logged out successfully.</p>
            <a href="/login" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Login Again</a>
        </div>
    )
}
