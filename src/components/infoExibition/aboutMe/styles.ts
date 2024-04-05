import styled from 'styled-components'

export const AboutMeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        display: flex;

        p {
            color: ${props => props.theme.white};
        }
    }

    .select-language {
        margin-right: 1rem;

        a {
            color: ${props => props.theme['green-cli']};
        }
    }
`

export const AboutMeParagraph = styled.p`
    color: ${props => props.theme.white};

    margin: .5rem 1rem 0 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    ul {
        margin-left: 2rem;
        list-style: none;
        
        li {
            margin: .5rem 0;

            a {
                color: ${props => props.theme['green-cli']};
            }
        }
    }
`