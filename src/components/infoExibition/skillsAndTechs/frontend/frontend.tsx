import { User } from '../../../user/user'
import { FrontendWrapper } from './styles'

const frontendTechs = [
	'html5',
	'css3',
	'dom manipulation',
	'react',
	'styled-components',
	'css modules',
	'responsiveness (media queries)'
]

export function Frontend() {
	return (
		<FrontendWrapper>
			{frontendTechs.map(frontendTech => {
				return (
					<div key={frontendTech}>
						<User route='/techs/front-end' />
						<p>{frontendTech}</p>
					</div>
				)
			})}
		</FrontendWrapper>
	)
}