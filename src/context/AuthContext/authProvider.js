import { useState } from "react";
import Context from "./authContext";


const Provider = ({ children }) => {

    const [isLoggedin, setLoggedin] = useState(false)

    const logoutHandler = () => {
        setLoggedin(false)
    }
    const loginHandler = () => {
        setLoggedin(true)
    }
    return (
        <Context.Provider value={{
            isLoggedin,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
            {children}
        </Context.Provider>
    )

}

export default Provider