import React from 'react'
import '../../styles/Menu.css'
import propTypes from 'prop-types'

const ConfigPopUp = ({ style, activePopup }) => {
  const handleClose = () => {
    activePopup('off')
  }

  if(document.getElementById('row-radio-button') != null){
    if(document.getElementById('row-radio-button').checked) {
      console.log(document.getElementById('row-radio-button').id)
    }
  } 
  
  if (document.getElementById('column-radio-button') != null) {
    if(document.getElementById('column-radio-button').checked) {
      console.log(document.getElementById('column-radio-button').id)
    }
  }
    

  return (
    <div className="popup-config" style={style}>
      <button type="button" className="btn-close" onClick={handleClose}>
        {' '}
        x{' '}
      </button>
      <div className="option-pair">
        <h2 className="titulo-popup">Preferencias</h2>
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="dark-mode-checkbox">
          Modo Oscuro
        </label>
        <input type="checkbox" id="dark-mode-checkbox" />
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="identation-input">
          Espacios de Identación
        </label>
        <input type="number" min="2" max="8" id="identation-input" />
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="display-mode-form">
          Vista de Cuadernos
        </label>
        <form action="get">
          <label className="popup-text" htmlFor="row-radio-button">
            Filas
          </label>
          <input type="radio" name="display-mode" id="row-radio-button" />
          <label className="popup-text" htmlFor="column-radio-button">
            Columnas
          </label>
          <input type="radio" name="display-mode" id="column-radio-button" />
        </form>
      </div>
    </div>
  )
}

ConfigPopUp.propTypes = {
  style: propTypes.node.isRequired,
  activePopup: propTypes.node.isRequired,
}

export default ConfigPopUp
