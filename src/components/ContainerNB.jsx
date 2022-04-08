import React from "react"
import Notebooks from "./Notebooks.jsx"
import data from "./Notebooks.json"

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
