import React from "react"
import "../styles/Notebooks.css"

const Notebooks = ({id, Title, LastTimeUse}) => {

    return (
        <div key = {id} className = "notebook">
            <h4>{Title}</h4>
            <p>{LastTimeUse}</p>
        </div>
    )
}

export default Notebooks;
