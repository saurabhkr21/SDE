import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/settings">Settings</Link><br />
        <Link to="/contect">Contect</Link><br />
        <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}
