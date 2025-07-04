import React from 'react'
import { useAuth } from '../context/Authcontext';

export default function Product() {
  const { isLoggedIn, setLoggedIn } = useAuth();

  const handleClick = () => {
    setLoggedIn(false)
  }
  return (
    <div>
      <h1 >Welcome</h1>
      <button onClick={handleClick}>Log Out</button>
    </div>
  )
}
