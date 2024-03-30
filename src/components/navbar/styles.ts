import styled from "styled-components";

export const NavbarWrapper = styled.header`
    margin-top: 2rem;
    background: ${props => props.theme["bg-gray"]};

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
                color: ${props => props.theme["green-cli"]};
            }
        }
    }
`

export const TitleAndReturnHome = styled.h1`
    a {
        color: ${props => props.theme["green-cli"]};
        text-decoration: none;
    }
`