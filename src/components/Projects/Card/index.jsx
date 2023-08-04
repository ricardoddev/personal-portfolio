import './styles.css'

export default function Card() {
  return (
    <div className="card">
      <a href="">
        <img src="../assets/print.png" alt="" />
        <h2>Nome do projeto</h2>
      </a>

      <div className='delete-edit-buttons'>
        <button><img src="../assets/trash.png" alt="Deletar projeto" className='delete'/></button>
        <button className='edit'>Editar</button>
      </div>
    </div>
  )
}