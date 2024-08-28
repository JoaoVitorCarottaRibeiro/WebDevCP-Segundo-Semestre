import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
   return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    </nav>
   ) 
}