import './styles.css'

export default function HelloWorld() {
  return (
    <div className='hw-home'>
      <h1>&lt;h1&gt;hello, world!&lt;/h1&gt;</h1>
      <div id="hw-info">
        <h2>Ricardo Delgado</h2>
        <div>

          <p>Web Developer from</p>
          <p id="location">Fortaleza, CE - Brazil.</p>
        </div>
      </div>
    </div> 
  )
}