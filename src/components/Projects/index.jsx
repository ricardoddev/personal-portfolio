import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"
import "./styles.css"

export default function Projects() {

  const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/projetos')
          .then((response) => setProjects(response.data))
          .catch((error) => console.error(error))
    }, [])

    const result = projects.map((project) => {
        return (
            <Card 
              key={project.id}
              nome={project.nome}
              url_img={project.url_img}
              id={project.id}
            />
        )
    })

  return(
    <div id="projects-screen">
      <h1>Meus projetos</h1>
      
      <div id='carousel'>
        {result}
      </div>
      <button id="add-project">+</button>
    </div>
  )
}

/*
      <img src="../assets/keyboard.svg" alt="Keyboard image" />
      <img src="../assets/coffee.svg" alt="A cup of coffee" />
      <img src="../assets/computer.svg" alt="Computer image" />
*/