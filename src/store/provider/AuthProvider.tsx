import { useState } from "react";
import type { AuthProviderProps } from "../../types/context.types";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}   

export default AuthProvider;