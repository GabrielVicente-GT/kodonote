import React from "react"
import Notebooks from "./Notebooks.js"
import data from "./Notebooks.json"
import {Link} from "react-router-dom"

const GridContainer = () => {
  return (
    <div className="tablero">
      {
        data.map(cuaderno => (
          <Link to="/editor">
            <Notebooks
            key={cuaderno.id}
            Title={cuaderno.Title}
            LastTimeUse={cuaderno.LastTimeUse} 
            Classname = {cuaderno.Classname}/>
          </Link>
        ))
      }
    </div>
  )
}

export default GridContainer;
