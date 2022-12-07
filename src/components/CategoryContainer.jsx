import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import productsData from '../products.json'




export default function CategoryContainer() {
    const [products, setProducts] = useState([])

    const { categoryName } = useParams()

    useEffect(() => {
        const filteredProducts = productsData.filter((product) => {
            return product.category == categoryName
        })
        setProducts(filteredProducts)
    }, [])



    return (
        <div>
            <h1>Bienvenido a {categoryName}</h1>
            {products.map((product) => (

                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <Link to={`/item/${product.id}`}>
                        <img src={product.image} />
                    </Link>
                </div>

            ))}
        </div>
    )

}