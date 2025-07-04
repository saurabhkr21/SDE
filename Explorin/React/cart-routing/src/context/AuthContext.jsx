import React, { createContext, useContext, useState } from 'react'

//Create hooks to use the AuthContext
const AuthContext = createContext();

//Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

//Provider component
export default function AuthProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (

        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>

    )
}
