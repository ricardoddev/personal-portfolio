import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme['bg-dark-gray']};
        color: ${props => props.theme['green-cli']};
        margin: 0 auto;
        max-width: 80rem;
        padding: 0 1rem;
    }

    body, input, textarea, button {
        font-family: "Ubuntu Mono", monospace;
        font-weight: 400;
        font-size: 1.25rem;
    }
`