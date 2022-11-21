import React from 'react'
import propTypes from 'prop-types'
import '../../styles/Alert.css'

const Alert = ({ alertTitle, alertText, closeFunction }) => (
  <div className="alert-card">
    <h1 className="alert-title">{alertTitle}</h1>
    <p className="alert-text">{alertText}</p>
    <button
      id="alert-accept-button"
      type="button"
      onClick={() => closeFunction(false)}
    >Aceptar</button>
  </div>
)

Alert.propTypes = {
  alertTitle: propTypes.string.isRequired,
  alertText: propTypes.string.isRequired,
  closeFunction: propTypes.func.isRequired,
}

export default Alert
