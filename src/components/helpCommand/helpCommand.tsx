import { User } from '../user/user'
import { HelpCommandWrapper } from './styles'

interface HelpCommandProps {
	route: string
}

export function HelpCommand({ route }: HelpCommandProps) {
	return (
		<HelpCommandWrapper>
			<User route={route} />
			<p>help</p>
		</HelpCommandWrapper>
	)
}