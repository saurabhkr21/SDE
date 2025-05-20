import React from 'react'
import { Link } from 'react-router'
// import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1 >Sample data</h1>
      <Link to="/contect">Contect</Link><br />
      <Link to="/test">Link</Link><br />


      <Link to="dashboard">dashboard</Link><br />
      
    </div>
  )
}
