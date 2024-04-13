import styled from 'styled-components'

export const NavbarWrapper = styled.header`
    margin-top: 2rem;
    background: ${props => props.theme['bg-gray']};

    padding: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 48%;
    }
    
    ul {
        list-style: none;

        display: flex;
        align-items: center;
        gap: 3rem;

        li {
            a {
                color: ${props => props.theme['green-cli']};
            }
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2.5rem;

        margin-top: 1rem;
        padding: 2rem 1rem;

        div {
            width: 100%;

            p {
                font-size: 1.25rem;
            }
        }

        ul {
            flex-direction: column;
            gap: 2rem;
            width: 100%;
            align-items: flex-end;

            li {
                a {
                    font-size: 1.5rem;
                    color: ${props => props.theme.black};
                    background-color: ${props => props.theme['green-cli']};
                    padding: .5rem;
                }
            }
        }
    }
`

export const TitleAndReturnHome = styled.h1`
    a {
        color: ${props => props.theme['green-cli']};
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        a {
            font-size: 3rem;
        }
    }
`