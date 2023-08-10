/* eslint-disable react/prop-types */
import axios from 'axios'
import './styles.css'

export default function Card(props) {
  
  function deleteProject(id) {
    const password = "ricardoddevadmin"

    const passwordTest = prompt('Digite a senha do administrador: ')

    if (passwordTest && passwordTest === password) {
      axios.delete(`http://localhost:3001/projetos/${id}`)
        .then(() => {
          alert("Projeto apagado com sucesso!")
          window.location.reload()
        })
        .catch(error => console.error(error))
    } else {
      alert("Você não tem autorização de administrador.")
    }
  }

  return (
    <div className="card">
      <a href="">
        <img src={props.url_img} alt="" />
        <h2>{props.nome}</h2>
      </a>

      <div className='delete-edit-buttons'>
        <button><img src="../assets/trash.png" alt="Deletar projeto" className='delete' onClick={() => deleteProject(props.id)}/></button>
        <button className='edit'>Editar</button>
      </div>
    </div>
  )
}