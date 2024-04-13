import { CommandLineInput } from '../../components/commandLineInput/commandLineInput'
import { InfoExibition } from '../../components/infoExibition/infoExibition'
import { Navbar } from '../../components/navbar/navbar'
import { HomeWrapper } from './styles'

export function Home() {
	return(
		<HomeWrapper>
			<Navbar />
			<CommandLineInput />
			<InfoExibition />
		</HomeWrapper>
             
	)
}