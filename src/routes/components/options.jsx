import React, { useState } from 'react'
import AccoPopUp from './PopupAccount'
import ConfigPopUp from './PopupConfig'
import PopUp from './PopUp'
import logo from '../../images/logo-negative.png'
import '../../styles/Menu.css'

const Options = ({ logOut, setNotes }) => {
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.error(error.message)
    }
  }

  const [buttonPopupCuen, setButtonPopupCuen] = useState(false)
  const [buttonPopupConfi, setButtonPopupConfi] = useState(false)

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
          className="account-link"
          onClick={() => setButtonPopupCuen(true)}
        >
          Cuenta
        </button>
        <button
          className="config-link"
          onClick={() => setButtonPopupConfi(true)}
        >
          Configuración
        </button>
        <button className="log-out" onClick={handleLogOut}>
          Cerrar sesión
        </button>
      </div>
      <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
        <AccoPopUp />
      </PopUp>
      <PopUp trigger={buttonPopupConfi} setTrigger={setButtonPopupConfi}>
        <ConfigPopUp />
      </PopUp>
    </div>
  )
}

export default Options
