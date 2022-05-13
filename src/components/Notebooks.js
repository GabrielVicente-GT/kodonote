import React, { useState } from "react"
import "../styles/Notebooks.css"
import {Link} from "react-router-dom"

const Notebooks = ({id, Title, LastTimeUse, Classname, setNBmenu}) => {

  

  return (
    <div key={id} className={Classname}>
      {Title === 'Agregar Cuaderno +' ?
        <Link to="/main" className="link" onClick={() => setNBmenu(true)}>
          <h4>{Title}</h4>
        </Link>
      :
        <Link to={Title === 'Agregar Cuaderno +' ? "/main" : "/editor"} className="link">
          <h4>{Title}</h4>
          <p>{LastTimeUse}</p>
        </Link>
      }
    </div>
  )
}

export default Notebooks;
