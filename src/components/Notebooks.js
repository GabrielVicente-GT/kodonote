import React from "react"
import "../styles/Notebooks.css"

const Notebooks = ({id, Title, LastTimeUse, Classname}) => {
  return (
    <div key = {id} class = {Classname}>
        <h4>{Title}</h4>
        <p>{LastTimeUse}</p>
    </div>
  )
}

export default Notebooks;
