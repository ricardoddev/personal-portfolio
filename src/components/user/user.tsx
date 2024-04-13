import { CLIUser } from './styles'

interface UserProps {
    route?: string 
}

export function User({ route }:UserProps) {
	return(
		<CLIUser>
			<strong>
                ricardoddev:
				<span>~/</span>
				<span className='off-in-mobile'>personal-portfolio</span>
				<span>{route}</span>
				<span id='last-char'>$</span>&nbsp;
			</strong>
		</CLIUser>
	)
}