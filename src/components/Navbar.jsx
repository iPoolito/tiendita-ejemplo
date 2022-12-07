import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {


    return (
        <div className="navbar">
            <Link to='/'>
                <p>Logo</p>
            </Link>
            {/* <Link to='/pokemons'>
                <p>Pokemons</p>
            </Link>
            <Link to='/rick-morty'>
                <p>Rick & Morty</p>
            </Link> */}
            <Link to="/category/manga">
                <p>Mangas</p>
            </Link>
        </div>
    )

}