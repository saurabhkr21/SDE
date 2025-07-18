'use client'

import { logout } from "../action"

export default function Logout() {
    return (
        <div className="flex flex-col items-center gap-4 bg-amber-300">
            <button onClick={() => { logout() }}>Logout</button>
        </div>
    )
}
