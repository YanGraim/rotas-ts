import { Link } from "react-router-dom";

export function Contato() {
    return (
        <div>
            <h1>Bem vindo a pagina contatos</h1>
            <h3>Telefone: (xx) xxxxx-xxxx</h3> 
            <hr />
            <Link to="/">Home</Link> <br />
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}