import styled from 'styled-components'

export const SkillsAndTechsWrapper = styled.div`
    display: flex;
    margin-top: 2rem;
`

export const TechsCategories = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    a {
        color: ${props => props.theme['green-cli']};
    }
`

export const TechInstructions = styled.div`
    color: ${props => props.theme.white};

    margin: .5rem 0 2rem 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;
`