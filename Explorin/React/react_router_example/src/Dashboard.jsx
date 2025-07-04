import React from 'react'
import { Link } from 'react-router'

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/home">Home</Link>
        </div>
    )
}
