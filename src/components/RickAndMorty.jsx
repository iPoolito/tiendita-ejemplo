import { useEffect, useState } from "react"




export default function RickAndMorty() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {

        const fetchData = () => {
            fetch("https://rickandmortyapi.com/api/character")
                .then((response) => response.json())
                .then((data) => {
                    setCharacters(data.results)
                })
        }


        fetchData()
    })

    return (
        <div>
            {characters.map((character) => (
                <div>

                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            ))}
        </div>
    )
}