import styled from 'styled-components'

export const SkillsAndTechsWrapper = styled.div`
    display: flex;
    margin-top: 2rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const TechsCategories = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    a {
        color: ${props => props.theme['green-cli']};
    }

    @media screen and (max-width: 768px){
        margin: 1.25rem 0 1.25rem 1rem;
        flex-direction: column; 
        gap: 1rem;
    }
`

export const TechInstructions = styled.div`
    color: ${props => props.theme.white};

    margin: .5rem 0 2rem 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;
`