import { User } from "../../user/user";
import { InfoExibitionWrapper } from "../styles";
import { AboutMeParagraph, AboutMeWrapper } from "./styles";

export function AboutMe() {
    return (
      <InfoExibitionWrapper>
        <AboutMeWrapper>
          <User route="/sobre-mim"/>
          <p>sobre-mim</p>
        </AboutMeWrapper>

        <AboutMeParagraph>
          olá, meu nome é Ricardo Delgado! É um prazer te conhecer.
        </AboutMeParagraph>

        <AboutMeParagraph>
          imagino que tenha vindo aqui para saber um pouco mais sobre mim. Pois bem...
        </AboutMeParagraph>

        <AboutMeParagraph>
          tenho 24 anos, sou quase graduado em Análise e Desenvolvimento de Sistemas na Universidade de Fortaleza (UNIFOR) e sou apaixonado por tecnologia. Desde que comecei a fazer meu curso na universidade, me interessei cada vez mais pela área e minha curiosidade cresce cada vez mais.
        </AboutMeParagraph>

        <AboutMeParagraph>
          gosto bastante de ler, jogar jogos de videogame e conversar besteira com meus amigos. Além disso, estudar é algo que faço constantemente e que faz parte da minha rotina, não apenas para evoluir como profissional, mas também por valorizar o conhecimento. 
        </AboutMeParagraph>

        <AboutMeParagraph>
          tenho alguns sonhos e objetivos também, como me tornar um profissional de referência na minha área e escrever livros (tanto técnicos como de ficção), e penso constantemente nas minhas ações de forma a alcançar esses meus objetivos.
        </AboutMeParagraph>

        <AboutMeParagraph>
          caso queira saber mais sobre mim ou precise entrar em contato comigo, pode me encontrar nos seguintes links:

          <ul>
            <li><a href="https://www.linkedin.com/in/ricardoddev/">&#8594; Linkedin: ricardoddev</a></li>
            <li><a href="mailto:ricardodelgadofilhodev@gmail.com">&#8594; Email: ricardodelgadofilhodev@gmail.com</a></li>
            <li><a href="https://www.instagram.com/ricardodfilho/">&#8594; Instagram: @ricardodfilho</a></li>
          </ul>
        </AboutMeParagraph>
      </InfoExibitionWrapper>
    );
  }