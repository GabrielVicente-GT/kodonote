import React, { useState } from "react"
import Notebooks from "./Notebooks.js"
import data from "./Notebooks.json"
import "../styles/Notebooks.css"
import AddPopUp from "./PopupAddN"
import PopUp from '../components/PopUp'

const GridContainer = (props) => {
  const [buttonPopupCuen, setButtonPopupCuen] = useState(false)

  const localizarNotebook = (Titlenotebook) => {
    return data.filter(
      (notebook) => notebook.Title === Titlenotebook,
    )[0] || " "
  }

  const notes = localizarNotebook(props.notes)

  if (props.notes === " " || notes === " "){
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
  } else {
    return (
      <div className="tablero">
      {
        <div>
          <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
            <AddPopUp/>
          </PopUp>
          <Notebooks
            key={notes.id}
            Title={notes.Title}
            LastTimeUse={notes.LastTimeUse} 
            Classname = {notes.Classname}
            setNBmenu = {setButtonPopupCuen}
            Color = {notes.Color}
          />
        </div>
      }
      </div>
    )
  }
}

export default GridContainer
