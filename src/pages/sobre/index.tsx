import { Link } from "react-router-dom";

export function Sobre() {
    return (
        <div>
            <h1>Pagina sobre</h1>
            <span>Voltando para a pagina Home</span> <br />
            <Link to="/">home</Link>
        </div>
    )
}