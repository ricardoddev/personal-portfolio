import styled from 'styled-components'

export const ProjectWrapper = styled.div`
    display: flex;

    p {
        color: ${props => props.theme.white};
    }

    a {
        color: ${props => props.theme['green-cli']};
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        margin-bottom: 2rem;
        padding: 0 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const HelpReply = styled.div`
    color: ${props => props.theme.white};

    margin: .5rem 1rem 2rem 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    p a {
        color: ${props => props.theme['green-cli']};
    }

    @media screen and (max-width: 768px) {
        gap: 1.5rem;

        p {
            font-size: 1.2rem;
        }
    }
`