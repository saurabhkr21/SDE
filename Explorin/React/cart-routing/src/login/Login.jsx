import React from 'react'
import { useAuth } from '../context/Authcontext';
import Product from '../product/product';
export default function Login() {

    const { isLoggedIn, setLoggedIn } = useAuth();

    const handleClick=()=>{
        setLoggedIn(true)
    }

    return (
        <div className="login">
            <h2>
                {
                    !isLoggedIn ?
                    
                    <input type="number" maxLength={10} required placeholder='Enter Mobile Number'/>
                    :' '
                }
            </h2>
            
            <button type='submit' onClick={handleClick}
            >{

                !isLoggedIn ? 'Logged In ' :  <Product/> }</button>
        </div>
    )
}
