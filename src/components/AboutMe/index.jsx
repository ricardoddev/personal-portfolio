import { useState } from 'react'
import Underline from './Underline'
import './styles.css'

export default function AboutMe() {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setTimeout(() => {
      setIsEnglish(!isEnglish);

    }, 500)

    const cardElement = document.getElementById('about-me-card');
    cardElement.classList.add('flip');

    setTimeout(() => {
      cardElement.classList.remove('flip');
    }, 500);
  }
  return (
    <div className="half-half">
      <div id="about-me-info">
        <div id="about-me-card">
          {isEnglish ? (
            <div>
              <p>Hello! My name is <span style={{color: '#C75D43'}}>Ricardo</span>, and welcome to my personal portfolio page. Here you can find some information about the technologies I work with and some of the projects I have developed throughout my journey.</p>

              <p>Speaking a bit about my personal side, I am a very curious person with an interest in learning various things from diverse areas. <span style={{color: '#C75D43'}}>Online gaming, music, and reading</span> are some of my favorite hobbies.</p>

              <p>If you&apos;d like to talk to me about any of these subjects or professional topics, you can find links to my social media profiles at the bottom of the page. Feel free to contact me there!</p>
            </div>
          ) : (
            <div>
              <p>Olá! Me chamo <span style={{color: '#C75D43'}}>Ricardo</span> e seja bem-vindo a minha página de Portfolio pessoal. Aqui você pode encontrar um pouco sobre as tecnologias que trabalho e alguns de meus projetos que desenvolvi ao longo de minha caminhada.</p>
              <p>Contando um pouco sobre meu lado pessoal, sou uma pessoa muito curiosa e tenho interesse em aprender várias coisas de áreas diversas. <span style={{color: '#C75D43'}}>Jogos online, música e leitura</span> são alguns de meus hobbies favoritos.</p>
              <p>Caso queira falar comigo sobre algum desses assuntos ou sobre temáticas profissionais, no fim da página estão destacadas algumas redes sociais minhas. Seja bem-vindo para me contatar por lá!</p>
            </div>
          )}
          <button onClick={toggleLanguage}>
            {isEnglish ? (
              <img
                src="../assets/usa.png"
                alt="Clique aqui para ver o texto em português!"
                className="flags"
              />
            ) : (
              <img
                src="../assets/brazil.png"
                alt="Click here to view the text in English!"
                className="flags"
              />
            )}
          </button>
        </div>

        <div className="imgs-carousel">
          <img src="../assets/guitar.svg" alt="Guitar Image" />
          <img src="../assets/books.svg" alt="Books Image" />
          <img src="../assets/lol.svg" alt="League of Legends Logo" />
        </div>
      </div>
      <h1 id="about-me-title"><span>About me<Underline /></span></h1>
    </div>
  )
}