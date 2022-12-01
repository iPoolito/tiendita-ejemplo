import { useEffect, useState } from "react"




export default function Fetecher() {
    const [pokemons, setPokemons] = useState([])

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => {
            return response.json()

        }).then((response) => {
            setPokemons(response.results)
        }).catch((error) => {
            console.log(error)
        })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h2>Fetecher</h2>
            {pokemons.map((pokemon) => (
                <div>
                    <p>{pokemon.name}</p>
                </div>
            ))}
        </div>
    )

}