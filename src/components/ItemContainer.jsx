import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productsData from '../products.json'




export default function ItemContainer() {
    const [product, setProduct] = useState({})
    const { itemID } = useParams()

    useEffect(() => {
        const foundProduct = productsData.find((product) => product.id == itemID)
        setProduct(foundProduct)
    }, [])

    return (
        <div>
            ItemContainer
            <h1> {product?.title}</h1>
            <p>{product?.description}</p>
            <img src={product.image} />
        </div>
    )

}