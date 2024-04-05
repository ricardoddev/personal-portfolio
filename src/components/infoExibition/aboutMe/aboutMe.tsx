import { useState, MouseEvent } from 'react'
import { User } from '../../user/user'
import { InfoExibitionWrapper } from '../styles'
import { AboutMeParagraph, AboutMeHeader } from './styles'

const portugueseContent = {
	paragraphs: [
		'olá, meu nome é Ricardo Delgado! É um prazer te conhecer.',
		'imagino que tenha vindo aqui para saber um pouco mais sobre mim. Pois bem...',
		'atualmente, moro em Fortaleza/CE - Brasil. Tenho 24 anos, sou quase graduado em Análise e Desenvolvimento de Sistemas na Universidade de Fortaleza (UNIFOR) e sou apaixonado por tecnologia. Desde que comecei a fazer meu curso na universidade, me interessei cada vez mais pela área e minha curiosidade cresce cada vez mais.',
		'gosto bastante de ler, jogar jogos de videogame e conversar besteira com meus amigos. Além disso, estudar é algo que faço constantemente e que faz parte da minha rotina, não apenas para evoluir como profissional, mas também por valorizar o conhecimento.',
		'tenho alguns sonhos e objetivos também, como me tornar um profissional de referência na minha área, morar fora do país e escrever livros (tanto técnicos como de ficção), e penso constantemente nas minhas ações de forma a alcançar esses meus objetivos.',
	],
	reachMeGreetings: 'caso queira saber mais sobre mim ou precise entrar em contato comigo, pode me encontrar nos seguintes links:',
	resume: 'Curriculo completo'
}

const englishContent = {
	paragraphs: [
		'Hello, my name is Ricardo Delgado! It\'s a pleasure to meet you.',
		'I imagine you\'ve come here to learn a little more about me. Well then...',
		'currently, I live in Fortaleza, CE - Brazil. I\'m 24 years old, almost graduated in Analysis and Systems Development at the University of Fortaleza (UNIFOR), and passionate about technology. Ever since I started my course at university, my interest in the field has only grown, and my curiosity continues to expand.',
		'I enjoy reading, playing video games, and having silly conversations with my friends. Additionally, studying is something I do constantly and is part of my routine, not only to evolve as a professional but also because I value knowledge.',
		'Also, I have some dreams and goals, such as becoming a reference professional in my field, living abroad and writing books (both technical and fiction). I constantly think about my actions in order to achieve these objectives.',
	],
	reachMeGreetings: 'If you\'d like to know more about me or need to get in touch, you can find me at the following links:',
	resume: 'Complete resume'
}

export function AboutMe() {
	const [isPortuguese, setIsPortuguese] = useState(true)

	function switchToPortuguese(event: MouseEvent<HTMLAnchorElement>) {
		event.preventDefault()
		setIsPortuguese(true)
	}

	function switchToEnglish(event: MouseEvent<HTMLAnchorElement>) {
		event.preventDefault()
		setIsPortuguese(false)
	}

	return (
		<InfoExibitionWrapper>
			<AboutMeHeader>
				<div>
					<User route="/sobre-mim"/>
					<p>about-me</p>
				</div>
				<span className='select-language'>
					<a href="" onClick={switchToPortuguese}>português</a>
					<span>/</span>
					<a href="" onClick={switchToEnglish}>english</a>
				</span>
			</AboutMeHeader>

			{isPortuguese ? (
				portugueseContent.paragraphs.map((paragraph, index) => (
					<AboutMeParagraph key={index}>{paragraph}</AboutMeParagraph>
				))
			) : (
				englishContent.paragraphs.map((paragraph, index) => (
					<AboutMeParagraph key={index}>{paragraph}</AboutMeParagraph>
				))
			)}

			<AboutMeParagraph>
				{isPortuguese ? portugueseContent.reachMeGreetings : englishContent.reachMeGreetings}

				<ul>
					<li><a href="https://www.linkedin.com/in/ricardoddev/" target='_blank' rel="noreferrer">&#8594; Linkedin: ricardoddev</a></li>
					<li><a href="mailto:ricardodelgadofilhodev@gmail.com" target='_blank' rel="noreferrer">&#8594; Email: ricardodelgadofilhodev@gmail.com</a></li>
					<li><a href="https://www.instagram.com/ricardodfilho/" target='_blank' rel="noreferrer">&#8594; Instagram: @ricardodfilho</a></li>
					<li>{isPortuguese ? (
						<a 
							href="https://drive.google.com/file/d/1EySoUJjtXN0sEJ8AqIMV3IxVdgrbk7QL/view?usp=sharing" 
							target='_blank' 
							rel="noreferrer"
						>
								&#8594; {portugueseContent.resume}
						</a>
					) : (
						<a 
							href="https://drive.google.com/file/d/16rz_Y4tUj3aX5ldidM9uZzeK8qxdYOsv/view?usp=sharing" 
							target='_blank' 
							rel="noreferrer"
						>
							&#8594; {englishContent.resume}
						</a>
					)}</li>
				</ul>
			</AboutMeParagraph>
		</InfoExibitionWrapper>
	)
}

