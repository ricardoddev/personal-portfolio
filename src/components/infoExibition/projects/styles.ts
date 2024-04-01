import styled from 'styled-components'

export const ProjectWrapper = styled.div`
    display: flex;
    margin-top: .5rem;

    p {
        color: ${props => props.theme.white};
    }

    a {
        color: ${props => props.theme['green-cli']};
    }
`

export const HelpReply = styled.p`
    color: ${props => props.theme.white};

    margin: .5rem 0 2rem 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    p a {
        color: ${props => props.theme['green-cli']};
    }
`