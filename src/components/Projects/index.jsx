import Card from "./Card"
import "./styles.css"

export default function Projects() {
  return(
    <div id="projects-screen">
      <h1>Meus projetos</h1>
      
      <div id='carousel'>
        <Card url= "" url_img="/assets/print.png" name="Spotify-React" description="Projeto desenvolvimento Web"></Card>
        <Card url= "https://mini-portfolio-ricardoddev.vercel.app" url_img="/assets/print.png" name="Mini-Portfolio" description="Página com pequenos projetos"></Card>
        <Card url= "https://ricardoddev.github.io/habits/" url_img="/assets/print.png" name="Habits" description="Controlador de hábitos"></Card>
        <Card url= "https://github.com/ricardoddev/LZW-Compressor" url_img="/assets/print.png" name="Compressor LZW" description="Estruturas de dados com Java"></Card>
      </div>
    </div>
  )
}