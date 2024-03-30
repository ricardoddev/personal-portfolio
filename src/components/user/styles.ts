import styled from "styled-components";

export const CLIUser = styled.div`
    strong {
        flex: 0 0 auto;
        width: auto;
        white-space: nowrap;
    }

    span {
        color: ${props => props.theme["blue-cli"]};
    }

    #last-char {
        color: ${props => props.theme.white};
        margin-left: 2px;
    }
`