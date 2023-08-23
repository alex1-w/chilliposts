import { FC, useEffect } from "react"
import { useUserProvide } from "./UserProvider";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const { isAuth } = useUserProvide()

    useEffect(() => {
        if (!isAuth) navigate('/')

    }, [isAuth])
    return (
        <>{children}</>
    )
};

export default RequireAuth;
