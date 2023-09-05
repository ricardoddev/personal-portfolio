import { Link as ScrollLink } from "react-scroll"
import "./styles.css"

export default function Footer() {
  return (
    <footer>
      <div id="social-media-div">
        <p>Contate-me em</p>
        <ul>
          <li>
            <a href="https://github.com/ricardoddev" rel="noreferrer" target="_blank">
              <img src="/assets/github-icon.png" alt="Github icon by Icons8" className="social-media-icons"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ricardoddev/" rel="noreferrer" target="_blank">
              <img src="/assets/linkedin-icon.png" alt="Github icon by Icons8" className="social-media-icons"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ricardodfilho" rel="noreferrer" target="_blank">
              <img src="/assets/instagram-icon.png" alt="Github icon by Icons8" className="social-media-icons"/>
            </a>
          </li>
        </ul>
      </div>
      <p id="back-to-top">
        <ScrollLink to="navbar" smooth={true}>
          Voltar ao topo
        </ScrollLink>
      </p>
    </footer>
  )
}