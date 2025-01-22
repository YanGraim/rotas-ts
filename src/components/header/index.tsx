import { Link } from "react-router-dom"
import "./header.css"

export function Header() {
    return (
        <header>
            <h1>Header</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contatos</Link>
            </div>
        </header>
    )
}