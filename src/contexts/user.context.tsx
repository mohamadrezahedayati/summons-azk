import { createContext, useState, useMemo } from "react";
import { UserType } from "../types/index";


type UserContextType = {
    currentUser: UserType,
    setCurrentUser: Function,
}

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (userInfo: UserType) => userInfo
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<UserContextType | null>(null);
    const value = useMemo(() => ({ currentUser, setCurrentUser }),[currentUser])
    /*@ts-ignore */
    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}