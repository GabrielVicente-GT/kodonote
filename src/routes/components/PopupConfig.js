import React from 'react'
import "../../styles/Menu.css"

const ConfigPopUp = () => (
  <div className="popup preferences-link-popup hide" id="preferences-link-popup">
    <div className="popup-body">
      <div className="option-pair">
        <h2 className="titulo-popup">Preferencias</h2>
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="dark-mode-checkbox">Modo Oscuro</label>
        <input type="checkbox" id="dark-mode-checkbox" />
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="identation-input">Espacios de Identación</label>
        <input type="number" min="2" max="8" id="identation-input" />
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="display-mode-form">Vista de Cuadernos</label>
        <form action="get">
          <label className="popup-text" htmlFor="row-radio-button">Filas</label>
          <input type="radio" name="display-mode" id="row-radio-button" />
          <label className="popup-text" htmlFor="column-radio-button">Columnas</label>
          <input type="radio" name="display-mode" id="column-radio-button" />
        </form>
      </div>
    </div>
  </div>
)

export default ConfigPopUp
