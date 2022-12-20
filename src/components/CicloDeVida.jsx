import { useContext, useEffect, useState } from "react"
import cartContext from "../context/cartContext"
import Context from "../context/AuthContext/authContext"
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
export default function CicloDeVida() {

    // const data = useContext(cartContext)
    const { isLoggedin, onLogin, onLogout } = useContext(Context)
    const [product, setProduct] = useState()
    const [products, setProducts] = useState()
    const [queryProducts, setQueryProducts] = useState()

    const clickHandler = () => {
        if (isLoggedin) {
            onLogout()
        } else {
            onLogin()
        }
    }
    useEffect(() => {
        const db = getFirestore()
        const itemRef = doc(db, 'productos', "BU4XFk0uww1K8yjOgvBV")
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() })
            }
        })
        //Consult without filters
        const itemsCollection = collection(db, 'productos')
        getDocs(itemsCollection).then(snapshot => {
            setProducts(snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            }))
        })

        //Consult with filters

        const q = query(collection(db, "productos"), where("price", ">", 99))
        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log('No results')
            }
            setQueryProducts(snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            }))
        })
    }, [])
    console.log(product, products, queryProducts)
    return (
        <div>
            <h1>Hola!{isLoggedin ? 'Estas conectado' : 'No estas Conectado'}</h1>
            <button onClick={clickHandler}>{isLoggedin ? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
        </div>

    )
}