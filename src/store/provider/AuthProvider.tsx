import { useState } from "react";
import type { AuthProviderProps } from "../../types/context.types";
import AuthContext from "../context/AuthContext";
import useLocalStorage from "../../hooks/usLocalStorage";

const AuthProvider = ({ children }: AuthProviderProps) => {

    const { getLocalStorageItem } = useLocalStorage();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return getLocalStorageItem('isLoggedIn');
    });

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}   

export default AuthProvider;