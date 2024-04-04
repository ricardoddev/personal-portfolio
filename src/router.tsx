import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { AboutMe } from './components/infoExibition/aboutMe/aboutMe'
import { Projects } from './components/infoExibition/projects/projects'
import { SkillsAndTechs } from './components/infoExibition/skillsAndTechs/skillsAndTechs'
import { ProgrammingLanguages } from './components/infoExibition/skillsAndTechs/programmingLanguages/programmingLanguages'

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/techs" element={<SkillsAndTechs />} >
						<Route path='/techs/programming-languages' element={<ProgrammingLanguages />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	) 
}