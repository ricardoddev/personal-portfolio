import styled from "styled-components";

export const CLIInput = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;
    width: 100%;

    input {
        background: ${props => props.theme["input-dark-gray"]};
        width: 100%;
        outline: none;
        border: none;

        color: ${props => props.theme.white};

        caret-color: ${props => props.theme["green-cli"]};

        &::selection {
            background-color: ${props => props.theme.black}; /* Cor da seleção */
        }
    }
`