import './styles.css'

export default function HelloWorld() {
  return (
    <div className='hw-home bg-animation'>
      <h1 id="hw-animation">&lt;h1&gt;hello, world!&lt;/h1&gt;</h1>
      <div id="hw-info">
        <h2>Ricardo Delgado</h2>
        <div>

          <p><strong>Desenvolvedor Web</strong> de</p>
          <p id="location">Fortaleza, CE - Brazil.</p>
        </div>
      </div>
    </div> 
  )
}