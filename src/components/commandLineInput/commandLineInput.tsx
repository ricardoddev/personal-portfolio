import { useState } from "react";
import { CLIInput } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



export function CommandLineInput() {
    const [command, setCommand] = useState('')
    const navigate = useNavigate()

    function translateCommand(command: string) {
        if (command === '/sobre-mim') {
            return '/about-me'
        }

        if (command === '/projetos') {
            return '/projects'
        }

        return command
    }
    
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCommand(event.target.value)
    }

    const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (command === '/sobre-mim' || command === '/projetos' || command === '/techs') {
                const translatedCommand = translateCommand(command)
                navigate(translatedCommand)         
            } else {
                toast.error('Comando inválido. Apenas os comandos "/sobre-mim", "/projetos" e "/techs" são permitidos', {
                    style: {
                        height: '5rem',
                    }, 
                    duration: 6000,
                })
            }
            
            setCommand('');
        }
      };

    return (
        <CLIInput>
            <strong>ricardoddev/personal-portfolio:<span>~$</span>&nbsp;</strong>
            <input 
                type="text" 
                onChange={handleInputChange}
                onKeyDown={handleInputSubmit}
                value={command}
            />
        </CLIInput>
    )
}