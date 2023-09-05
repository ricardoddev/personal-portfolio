/* eslint-disable react/prop-types */
import './styles.css'

export default function Card(props) {

  return (
    <div className="card">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.url_img} alt="" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </a>

    </div>
  )
}