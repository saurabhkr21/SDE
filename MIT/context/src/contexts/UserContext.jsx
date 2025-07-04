import { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Create the provider component
export function UserProvider({ children }) {
    const [user, setUser] = useState('Kumar');

    // You can add more values or functions to the context
    const value = {
        user,
        setUser,
        // Add more values/functions as needed
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

// Create a custom hook to use the context
export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
