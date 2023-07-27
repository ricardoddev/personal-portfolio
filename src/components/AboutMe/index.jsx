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
              <p>English text Lorem ipsum...</p>
              <p>English text Lorem ipsum...</p>
            </div>
          ) : (
            <div>
              <p>Texto em português Lorem ipsum...</p>
              <p>Texto em português Lorem ipsum...</p>
              <p>Texto em português Lorem ipsum...</p>
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