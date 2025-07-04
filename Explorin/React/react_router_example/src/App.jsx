import React from 'react'
import { Link, NavLink } from 'react-router'

export default function App() {
  const getStyles = ({ isActive }) => {
        return {
            color: isActive ? 'red' : ''
        }
    }
  return (
    <div>
      <h1>Sample data</h1>
      <nav>
        <NavLink to="/home" style={getStyles}>Home</NavLink><br />
        <NavLink to="/contect" style={getStyles}>Contact</NavLink><br />
        <NavLink to="/dashboard" style={getStyles}>Dashboard</NavLink><br />
        <NavLink to="/settings" style={getStyles}>Settings</NavLink><br />
      </nav>
    </div>
  )
}
