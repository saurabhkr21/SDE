import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router'
import Cart from './cart/Cart'
import Product from './product/product'
import Login from './login/Login'
import Home from './Home'

export default function App() {
  const getStyles = ({ isActive }) => {
    return {
      color : isActive ? 'red' : ''
    }
  }

  return (
    <div>

      <NavLink to="/" style={getStyles}>Home</NavLink>||
      <NavLink to="/Cart" style={getStyles}>Cart</NavLink>||
      <NavLink to="/Product" style={getStyles}>Product</NavLink>||
      <NavLink to="/Login" style={getStyles}>Login</NavLink>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

    </div>
  )
}
