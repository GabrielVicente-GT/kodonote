import React from 'react'
import '../../styles/Menu.css'
import propTypes from 'prop-types'

const AccoPopUp = ({style}) => (
  <div className="popup-account" style={style}>
      <button type='button' className='btn-close'> x </button>
      <div className="option-pair">
        <h2 className="titulo-popup">Cuenta</h2>
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="dark-mode-checkbox">
          Guardado automático
        </label>
        <input type="checkbox" id="dark-mode-checkbox" />
      </div>
      <div className="option-pair">
        <label className="popup-text" htmlFor="identation-input">
          Cantidad máxima de cuadernos
        </label>
        <input type="number" min="2" max="8" id="identation-input" />
      </div>
  </div>
)

AccoPopUp.propTypes = {
  style: propTypes.node.isRequired
}

export default AccoPopUp
