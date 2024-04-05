import styled from 'styled-components'

export const ProgrammingLanguagesWrapper = styled.main`
    padding-top: 1rem;

    display: flex;
    flex-direction: column;

    div {
        display: flex;

        p {
            color: ${props => props.theme.white};
        }
    }
`