import './styles.css'

export default function Techs() {
  return(
    <div>
      <div className="bg-animation">
        <div className='centralize'>
          <div className="centralize techs-background">
            <h1 id="techs-title">Techs</h1>
            <div className="techs-grid-position">
              <div className='techs-content'>
                <h2>Front-End</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>Axios</li></ul>
              </div>
              <div className='techs-content align-right'>
                <h2>Back-End</h2>
                <ul>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>REST API</li>
                </ul>
              </div>
              <div className='techs-content'>
                <h2>Outras tecnologias</h2>
                <ul>
                  <li>Figma</li>
                  <li>Java (Lógica programacional e estruturas de dados)</li>
                  <li>Git</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}