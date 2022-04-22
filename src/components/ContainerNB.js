import React from "react"
import Notebooks from "./Notebooks.js"
import data from "./Notebooks.json"
import "../styles/Notebooks.css"


const GridContainer = () => {
  return (
    <div className="tablero">
      {
        data.map(cuaderno => (
            <Notebooks
            key={cuaderno.id}
            Title={cuaderno.Title}
            LastTimeUse={cuaderno.LastTimeUse} 
            Classname = {cuaderno.Classname}/>
        ))
      }
    </div>
  )
}

export default GridContainer;
