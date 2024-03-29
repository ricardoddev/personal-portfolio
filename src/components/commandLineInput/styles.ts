import styled from "styled-components";

export const CLIInput = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;
    width: 100%;

    strong {
        flex: 0 0 auto;
        width: auto;
        white-space: nowrap;
    }

    span {
        color: ${props => props.theme.white};
        margin: 0 0.275rem 0 5px;
    }

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