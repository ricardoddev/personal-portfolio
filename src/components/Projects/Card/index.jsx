/* eslint-disable react/prop-types */
import './styles.css'

export default function Card(props) {
  
  return (
    <div className="card">
      <a href="">
        <img src={props.url_img} alt="" />
        <h2>{props.nome}</h2>
      </a>

      <div className='delete-edit-buttons'>
        <button><img src="../assets/trash.png" alt="Deletar projeto" className='delete'/></button>
        <button className='edit'>Editar</button>
      </div>
    </div>
  )
}