import { Link } from 'react-router-dom'
import { NavbarWrapper, TitleAndReturnHome } from './styles'

export function Navbar() {
	const handleScrollToInfoExibition = () => {
		const infoExibitionElement = document.getElementById('infoExibition')
		if (infoExibitionElement) {
			infoExibitionElement.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<NavbarWrapper>
			<div>
				<TitleAndReturnHome><Link to={'/'}>portfólio ricardoddev</Link></TitleAndReturnHome>
				<p>digite o comando na CLI abaixo e aperte ENTER ou clique nos botões para acessar as informações</p>
				<p>(ex.: about-me)</p>
			</div>
            
			<ul>
				<li><Link to={'/about-me'} onClick={handleScrollToInfoExibition}>/about-me</Link></li>
				<li><Link to={'/projects'} onClick={handleScrollToInfoExibition}>/projects</Link></li>
				<li><Link to={'/techs'} onClick={handleScrollToInfoExibition}>/techs</Link></li>
			</ul>
		</NavbarWrapper>
	)
}