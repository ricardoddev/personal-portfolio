import styled from 'styled-components'

export const FrontendWrapper = styled.main`
    padding-top: 1rem;

    display: flex;
    flex-direction: column;

    div {
        display: flex;

        p {
            color: ${props => props.theme.white};
        }
    }

    @media screen and (max-width: 768px){
        gap: 1rem;
        div {
            flex-direction: column;
        }
    }
`