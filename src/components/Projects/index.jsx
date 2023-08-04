import Card from "./Card"
import "./styles.css"

export default function Projects() {
  return(
    <div id="projects-screen" >
      <h1>Meus projetos</h1>
      
      <div id='carousel'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

/*
      <img src="../assets/keyboard.svg" alt="Keyboard image" />
      <img src="../assets/coffee.svg" alt="A cup of coffee" />
      <img src="../assets/computer.svg" alt="Computer image" />
*/