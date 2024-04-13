import { HelpCommand } from '../../helpCommand/helpCommand'
import { User } from '../../user/user'
import { InfoExibitionWrapper } from '../styles'
import { HelpReply, ProjectWrapper } from './styles'

const projects = [
	{
		id: 1,
		name: 'task manager',
		link: 'https://github.com/ricardoddev/task-manager-node'
	},
	{
		id: 2,
		name: 'rest api practices',
		link: 'https://github.com/ricardoddev/ignite-api-rest-node'
	},
	{
		id: 3,
		name: 'notes app',
		link: 'https://github.com/ricardoddev/notes-app'
	},
	{
		id: 4,
		name: 'voting poll api',
		link: 'https://github.com/ricardoddev/voting-poll-api'
	},
	{
		id: 5,
		name: 'todo list',
		link: 'https://github.com/ricardoddev/todo-list-ignite'
	},
	{
		id: 6,
		name: 'habit tracking',
		link: 'https://github.com/ricardoddev/habits'
	},
]

export function Projects() {
	return (
		<InfoExibitionWrapper>
			<HelpCommand route='projects' />

			<HelpReply>
				<p>Clique no nome do projeto para acessar seu repositório no <a href="https://github.com/ricardoddev/" target='_blank' rel="noreferrer">Github</a>.</p>
				<p>Click on the name of the project to access its <a href="https://github.com/ricardoddev/" target='_blank' rel="noreferrer">Github</a> repository.</p>
			</HelpReply>

			{projects.map(project => {
				return (
					<ProjectWrapper key={project.id}>
						<User route="projects"/>
						<a href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
					</ProjectWrapper>
				)
			})}
		</InfoExibitionWrapper>
	)
}