import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import productsData from '../products.json'
import ItemCount from "./ItemCount"
import { CartContext } from "../context/cartContext"




export default function ItemContainer() {
    const [product, setProduct] = useState({})
    const { itemID } = useParams()
    const { addItem } = useContext(CartContext);

    const [contador, setContador] = useState("-");

    const onAdd = (quantity) => {
        setContador(quantity)
        addItem(product, quantity)
    }

    useEffect(() => {
        const foundProduct = productsData.find((product) => product.id == itemID)
        setProduct(foundProduct)
    }, [])

    return (
        <div>
            ItemContainer
            <h1> {product?.title}</h1>
            <p>{product?.description}</p>
            <img src={product.image} alt={product?.title} />
            <ItemCount nombreProducto="Producto" stock={product.stock} initial={1} onAdd={onAdd} />
            <p>Cantidad: {contador}</p>
        </div>
    )

}