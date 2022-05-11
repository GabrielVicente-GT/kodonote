import React from "react"
import "../styles/Notebooks.css"
import {Link} from "react-router-dom"

const Notebooks = ({id, Title, LastTimeUse, Classname}) => {
  return (
    <div key={id} className={Classname}>
      <Link to={Title === 'Agregar Cuaderno +' ? "/main" : "/editor"} className="link">
        <h4>{Title}</h4>
        <p>{LastTimeUse}</p>
      </Link>
    </div>
  )
}

export default Notebooks;
