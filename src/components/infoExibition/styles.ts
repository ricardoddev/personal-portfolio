import styled from 'styled-components'

export const InfoExibitionWrapper = styled.main`
    flex-grow: 1;
    
    margin-top: .5rem;
    margin-bottom: 2rem;
    background: ${props => props.theme['bg-gray']};
    padding-bottom: 1rem;  
    
    @media screen and (max-width: 768px) {
        margin-bottom: 10rem;
    }
`

export const IsHomeContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    padding: 1rem 6rem;
    
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1.25rem;

        height: 100%;
        width: 100%;

        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 2rem;
            color: ${props => props.theme.white}
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        img {
            height: 10rem;
            align-items: center;
        }

        div {
            gap: .5rem;            
            h1 {
                font-size: 2rem;
                text-align: center;
            }
            h2 {
                font-size: 1.5rem;
                text-align: center;
            }         
        }
    }
`