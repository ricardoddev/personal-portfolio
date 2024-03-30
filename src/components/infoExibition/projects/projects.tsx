import { User } from "../../user/user";
import { InfoExibitionWrapper } from "../styles";
import { HelpReply, ProjectWrapper } from "./styles";

const projects = [
  {
    name: 'task manager',
    link: 'https://github.com/ricardoddev/task-manager-node'
  },
  {
    name: 'rest api practices',
    link: 'https://github.com/ricardoddev/ignite-api-rest-node'
  },
  {
    name: 'notes app',
    link: 'https://github.com/ricardoddev/notes-app'
  },
  {
    name: 'voting poll api',
    link: 'https://github.com/ricardoddev/voting-poll-api'
  },
  {
    name: 'todo list',
    link: 'https://github.com/ricardoddev/todo-list-ignite'
  },
  {
    name: 'habit tracking',
    link: 'https://github.com/ricardoddev/habits'
  },
]

export function Projects() {
    return (
      <InfoExibitionWrapper>
        <ProjectWrapper>
          <User route="/projects" />
          <p>help</p>
        </ProjectWrapper>

        <HelpReply>
          <p>Clique no nome do projeto para acessar seu repositório no Github.</p>
          <p>Click on the name of the project to access its Github repository.</p>
        </HelpReply>

        {projects.map(project => {
          return (
            <ProjectWrapper>
              <User route="/projects"/>
              <a href={project.link} target="_blank">{project.name}</a>
            </ProjectWrapper>
          )
        })}
      </InfoExibitionWrapper>
    );
  }