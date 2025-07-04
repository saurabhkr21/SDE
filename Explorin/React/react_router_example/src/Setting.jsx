import React from 'react'
import { NavLink, Route, Routes } from 'react-router'
import Home from './Home'
import Contect from './Contect'
import Dashboard from './Dashboard'

export default function Setting() {
    const getStyles = ({ isActive }) => {
        return {
            color: isActive ? 'red' : ''
        }
    }
    return (
        <div>
            <h1>Setting</h1>
            <NavLink to="./Home" style={getStyles}>Home</NavLink>||
            <NavLink to="./contect" style={getStyles}>Contect</NavLink>||
            <NavLink to="./Dashboard" style={getStyles}>Dashboard</NavLink>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contect' element={<Contect/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </div>
    )
}
