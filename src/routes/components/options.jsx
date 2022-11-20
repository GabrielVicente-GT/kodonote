import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import logo from '../../images/logo-negative.png'
import '../../styles/Menu.css'

const Options = ({
  logOut,
  activePopupAccount,
  activePopupSettings,
  activePopupOpinion,
}) => {
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleAccount = async () => {
    activePopupAccount('on')
  }

  const handleSettings = async () => {
    activePopupSettings('on')
  }

  const handleOpinion = async () => {
    activePopupOpinion('on')
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
      />
      <div className="option-list">
        <button type="button" className="account-link" onClick={handleAccount}>
          Cuenta
        </button>
        <button type="button" className="config-link" onClick={handleSettings}>
          Configuración
        </button>
        <Link to="/themes" className="themes-link">
          Ver temas
        </Link>
        <button type="button" className="opinion-link" onClick={handleOpinion}>
          Cuéntanos tu opinión
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
  activePopupAccount: propTypes.func.isRequired,
  activePopupSettings: propTypes.func.isRequired,
  activePopupOpinion: propTypes.func.isRequired,
}

export default Options
