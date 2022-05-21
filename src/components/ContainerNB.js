import React, { useState } from "react"
import Notebooks from "./Notebooks.js"
import data from "./Notebooks.json"
import "../styles/Notebooks.css"
import AddPopUp from "./PopupAddN"
import PopUp from '../components/PopUp'

const GridContainer = () => {
  const [buttonPopupCuen, setButtonPopupCuen] = useState(false)
  return (
    <div className="tablero">
      {
        data.map((cuaderno, index) => (
          <div id={index}>
          <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
            <AddPopUp/>
          </PopUp>
            <Notebooks
            key={cuaderno.id}
            Title={cuaderno.Title}
            LastTimeUse={cuaderno.LastTimeUse} 
            Classname = {cuaderno.Classname}
            setNBmenu = {setButtonPopupCuen}
            Color = {cuaderno.Color}/>
            </div>
        ))
      }
    </div>
  )
}

export default GridContainer
