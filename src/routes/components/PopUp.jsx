import React from 'react'
import propTypes from 'prop-types'
import '../../styles/Menu.css'

// El boton aparece siempre por alguna razon

const PopUp = ({ title, style }) => (
  <div style={style} className="popup">
    <h1>{title}</h1>
    <button type="button"> x </button>
  </div>
)

PopUp.propTypes = {
  title: propTypes.node.isRequired,
  style: propTypes.node.isRequired,
}

export default PopUp
