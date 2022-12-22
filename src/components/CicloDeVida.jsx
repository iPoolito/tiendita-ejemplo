import { useContext, useEffect, useState } from "react"
import cartContext from "../context/cartContext"
import Context from "../context/AuthContext/authContext"
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import { getAllProducts } from "../queries/products"
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
        const order = {
            buyer: { name: 'Martin', cellphone: '312939129', address: 'Calle 2' },
            products: [{ name: 'Gorra', price: 100 }, { name: 'Pantalon', price: 200 }],
            total: 300
        }
        const db = getFirestore()

        // const ordersCollection = collection(db, "orders")
        // addDoc(ordersCollection, order).then((response) => {
        //     console.log(response)
        // })

        // const itemRef = doc(db, 'productos', "BU4XFk0uww1K8yjOgvBV")
        // getDoc(itemRef).then((snapshot) => {
        //     if (snapshot.exists()) {
        //         setProduct({ id: snapshot.id, ...snapshot.data() })
        //     }
        // })
        //Consult without filters
        const allProducts = getAllProducts(db)
        setProducts(allProducts)

        //Consult with filters

        // const q = query(collection(db, "productos"), where("price", ">", 99))
        // getDocs(q).then((snapshot) => {
        //     if (snapshot.size === 0) {
        //         console.log('No results')
        //     }
        //     setQueryProducts(snapshot.docs.map((doc) => {
        //         return { id: doc.id, ...doc.data() }
        //     }))
        // })
    }, [])

    const handleOrder = (event) => {
        event.preventDefault()
        const buyer = {
            name: event.target[0].value,
            address: event.target[1].value
        }
        const order = {
            buyer: buyer,
            products: [{ name: 'Gorra', price: 100 }, { name: 'Pantalon', price: 200 }],
            total: 300
        }
        const db = getFirestore()

        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((response) => {
            console.log(response)
        })
        console.log(buyer)
    }

    return (
        <div>
            <h1>Hola!{isLoggedin ? 'Estas conectado' : 'No estas Conectado'}</h1>
            <button onClick={clickHandler}>{isLoggedin ? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
            <form onSubmit={handleOrder}>
                <input type='text' name="name" />
                <input type='text' name="direccion" />
                <button>Ordenar</button>
            </form>
            {products?.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} alt={product.title} width={'200px'} height={'200px'} />
                </div>
            ))}
        </div>

    )
}