import styled from "styled-components";

export const NavbarWrapper = styled.header`
    background: ${props => props.theme["input-dark-gray"]};

    height: 30vh;
    padding: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 25%;
    }
    
    ul {
        list-style: none;

        display: flex;
        align-items: center;
        gap: 3rem;

        li {
            a {
                text-decoration: none;
                color: ${props => props.theme["green-cli"]};
            }
        }
    }
`