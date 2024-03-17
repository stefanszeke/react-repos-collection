import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}


export function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    const value = {
        user,
        setUser
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}