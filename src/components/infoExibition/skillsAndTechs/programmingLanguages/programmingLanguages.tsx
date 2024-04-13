import { User } from '../../../user/user'
import { ProgrammingLanguagesWrapper } from './styles'

const programmingLanguages = [
	'javascript',
	'typescript',
	'java',
	'ruby',
]

export function ProgrammingLanguages() {
	return(
		<ProgrammingLanguagesWrapper>
			{
				programmingLanguages.map(language => {
					return (
						<div key={language}>
							<User route='techs/prog-lang' />
							<p>{language}</p>
						</div>
					)
				})
			}
		</ProgrammingLanguagesWrapper>
	)
}