import { NavbarWrapper } from "./styles";


export function Navbar() {
    return (
        <NavbarWrapper>
            <div>
                <h1>portfólio ricardoddev</h1>
                <p>digite o comando no terminal abaixo ou clique neles para acessar as informações</p>
                <p>(ex.: /sobre-mim)</p>
            </div>
            
            <ul>
                <li><a href="#">/sobre-mim</a></li>
                <li><a href="#">/projetos</a></li>
                <li><a href="#">/habilidades-e-tecnologias</a></li>
            </ul>
        </NavbarWrapper>
    )
}