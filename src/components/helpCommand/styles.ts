import styled from 'styled-components'

export const HelpCommandWrapper = styled.div`
    display: flex;

    p {
        color: ${props => props.theme.white};
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`