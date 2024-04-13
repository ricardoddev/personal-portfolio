import { Link, Outlet } from 'react-router-dom'
import { User } from '../../user/user'
import { InfoExibitionWrapper } from '../styles'
import { SkillsAndTechsWrapper, TechInstructions, TechsCategories } from './styles'
import { HelpCommand } from '../../helpCommand/helpCommand'

export function SkillsAndTechs() {

	return (
		<>
			<InfoExibitionWrapper>
				
				<HelpCommand route='techs'/>
				<TechInstructions>
					<p>Clique nos links abaixo para visualizar as informações</p>
					<p>Click on the links below to see the informations</p>
				</TechInstructions>

				<SkillsAndTechsWrapper>
					<User route='techs' />
					<TechsCategories>
						<strong><Link to={'/techs/programming-languages'}>programming languages</Link></strong>
						<strong><Link to={'/techs/front-end'}>front-end</Link></strong>
						<strong><Link to={'/techs/back-end'}>back-end</Link></strong>
						<strong><Link to={'/techs/other'}>other</Link></strong>
					</TechsCategories>
				</SkillsAndTechsWrapper>
				<Outlet />
			</InfoExibitionWrapper>
		</>
	)
}