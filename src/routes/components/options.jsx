import React from 'react'
import propTypes from 'prop-types'
import logo from '../../images/logo-negative.png'
import '../../styles/Menu.css'

const Options = ({ logOut, setNotes, activePopupAccount, activePopupSettings }) => {
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleAccount = async () => {
    activePopupAccount("on")
  }

  const handleSettings = async () => {
    activePopupSettings("on")
  }

  return (
    <div className="options">
      <img src={logo} alt="logo" />
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        className="search-bar"
        placeholder="Buscar cuaderno"
        onChange={(e) => {
          setNotes(e.target.value)
        }}
      />
      <div className="option-list">
        <button
          type="button"
          className="account-link"
          onClick={handleAccount}
        >
          Cuenta
        </button>
        <button
          type="button"
          className="config-link"
          onClick={handleSettings}
        >
          Configuración
        </button>
        <button type="button" className="log-out" onClick={handleLogOut}>
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

Options.propTypes = {
  logOut: propTypes.func.isRequired,
  setNotes: propTypes.func.isRequired,
  activePopupAccount: propTypes.func.isRequired,
  activePopupSettings: propTypes.func.isRequired
}

export default Options
