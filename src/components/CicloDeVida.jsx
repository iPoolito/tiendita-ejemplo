import { useContext } from "react"
import cartContext from "../context/cartContext"
import Context from "../context/AuthContext/authContext"

export default function CicloDeVida() {

    // const data = useContext(cartContext)
    const { isLoggedin, onLogin, onLogout } = useContext(Context)

    const clickHandler = () => {
        if (isLoggedin) {
            onLogout()
        } else {
            onLogin()
        }
    }
    return (
        <div>
            <h1>Hola!{isLoggedin ? 'Estas conectado' : 'No estas Conectado'}</h1>
            <button onClick={clickHandler}>{isLoggedin ? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
        </div>

    )
}