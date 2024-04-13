import { useState } from 'react'
import { CLIInput } from './styles'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { User } from '../user/user'

export function CommandLineInput() {
	const [command, setCommand] = useState('')
	const navigate = useNavigate()
    
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setCommand(event.target.value)
	}

	const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if (command === 'about-me' || command === 'projects' || command === 'techs') {
				navigate(command)         
			} else {
				toast.error('Comando inválido. Apenas os comandos "about-me", "projects" e "techs" são permitidos', {
					style: {
						height: '5rem',
					}, 
					duration: 6000,
				})
			}
            
			setCommand('')
		}
	}

	return (
		<CLIInput>
			<User />
			<input 
				type="text" 
				onChange={handleInputChange}
				onKeyDown={handleInputSubmit}
				value={command}
				placeholder='about-me'
			/>
		</CLIInput>
	)
}