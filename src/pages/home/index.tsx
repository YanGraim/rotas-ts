import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Bem vindo a pagina home</h1>

            <span>Criando navegação entre as paginas</span> <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">Contatos</Link>
        </div>
    )
} 