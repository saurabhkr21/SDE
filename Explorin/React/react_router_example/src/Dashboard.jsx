import React from 'react'
import { Link } from 'react-router'
import Home from './Home'

export default function Dashboard() {
    return (
        <div>
            <h1>dashboard</h1>
            <Link to="/Home">Home</Link>
        </div>
    )
}
