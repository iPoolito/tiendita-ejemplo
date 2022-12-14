import { createContext } from "react";


const Context = createContext({
    isLoggedin: false,
    onLogout: () => { },
    onLogin: () => { }
})

export default Context