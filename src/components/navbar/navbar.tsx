import { Link } from "react-router-dom";
import { NavbarWrapper, TitleAndReturnHome } from "./styles";

export function Navbar() {
    return (
        <NavbarWrapper>
            <div>
                <TitleAndReturnHome><Link to={'/'}>portfólio ricardoddev</Link></TitleAndReturnHome>
                <p>digite o comando no terminal abaixo ou clique neles para acessar as informações</p>
                <p>(ex.: /sobre-mim)</p>
            </div>
            
            <ul>
                <li><Link to={'/about-me'}>/sobre-mim</Link></li>
                <li><Link to={'/projects'}>/projetos</Link></li>
                <li><Link to={'/skills-and-techs'}>/habilidades-e-tecnologias</Link></li>
            </ul>
        </NavbarWrapper>
    )
}