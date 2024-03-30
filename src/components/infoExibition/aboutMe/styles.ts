import styled from "styled-components";

export const AboutMeWrapper = styled.div`
    display: flex;
    margin-top: .5rem;

    p {
        color: ${props => props.theme.white};
    }
`

export const AboutMeParagraph = styled.p`
    color: ${props => props.theme.white};

    margin: .5rem 1rem 1rem 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    ul {
        margin-left: 2rem;
        list-style: none;
        
        li {
            margin: .5rem 0;

            a {
                color: ${props => props.theme["green-cli"]};
            }
        }
    }
`