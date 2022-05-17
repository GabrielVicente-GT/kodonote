import React, { useState } from 'react'
import "../styles/Menu.css"
import data from "./Notebooks.json"

const AddPopUp = () => {

  const[color, setColor] = useState("#000000")
  const[nameN, setnameN] = useState("Cuaderno nuevo")

  const GetColor = (val) => {
    setColor(val.target.value)
  }

  const GetName = (val) => {
    setnameN(val.target.value)
  }

  const click = () => {
    data.push({
      "id": data.length + 1,
      "Classname": "notebook " + nameN + "-notebook",
      "Title": nameN,
      "LastTimeUse": "Editado: --",
      "Color": color,
    })
  }

  return (
    <div className='popup-body'>
      <div className="popup preferences-link-popup hide" id="preferences-link-popup">
        <div className="popup-body">
          <div className="option-pair">
            <h2 className="titulo-popup">Cuadernos</h2>
          </div>
          <div className="option-pair">
            <label className="popup-text" htmlFor="identation-input">Nombre del cuaderno: </label>
            <input type="text" id="name-input" onInput={GetName} />
          </div>
          <div className="option-pair">
            <label className="popup-text" htmlFor="identation-input">Color del cuaderno: </label>
            <input type="color" id="color-input" onChange={GetColor} />
          </div>
          <button className='CreateNotebook' id="InputColor" onClick={click}>Crear cuaderno</button>
        </div>
      </div>
    </div>
  )
}

export default AddPopUp
