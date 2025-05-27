import React, { createContext } from "react";

const userContext = createContext(null);

export default function UserContextProvider({ children }) {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
    });
    return (
        <userContext.Provider value={(user, setUser)}>
            {children}
        </userContext.Provider>
    );
}