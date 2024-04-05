import { User } from '../../../user/user'
import { OtherTechsWrapper } from './styles'

const otherTechs = [
	'git',
	'http protocol',
	'rest api',
	'npm',
	'eslint',
	'vercel',
	'linux kernel',
	'wordpress'
]

export function Other() {
	return (
		<OtherTechsWrapper>
			{otherTechs.map(tech => {
				return (
					<div key={tech}>
						<User route='/techs/other' />
						<p>{tech}</p>
					</div>

				)
			})}
		</OtherTechsWrapper>
	)
}