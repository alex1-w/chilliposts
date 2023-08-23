import { FC, createContext, useState, useContext } from "react"

interface IUser {
    isAuth: boolean,
    setAuth: () => void,
    logout: () => void
}

const UserContext = createContext<IUser>({
    isAuth: false,
    setAuth: () => { return null },
    logout: () => { return null }
})


const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const setAuth = () => setIsAuth(true)
    const logout = () => setIsAuth(false)

    return (
        <UserContext.Provider value={{ isAuth, logout, setAuth }}>
            {children}
        </UserContext.Provider>
    )
};


export const useUserProvide = () => useContext(UserContext)
export default UserProvider