import React, { useContext } from 'react'
import GridContainer from './components/GridContainer'
import Options from './components/options'
import AccoPopUp from './components/PopupAccount'
import ConfigPopUp from './components/PopupConfig'
import { UserAuthContext } from '../hooks/UserAuthProvider'
import '../styles/App.css'

const MainMenu = () => {
  const { user, logOut } = useContext(UserAuthContext)

  // Estilo inicial
  const popupOff = {
    fontFamily: 'Hind Madurai, sans-serif',
    display: "none",
    position: "fixed",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }

  const popupOn = {
    fontFamily: 'Hind Madurai, sans-serif',
    fontWeight: "300",
    display: "flex",
    position: "absolute",
    left: "50%",
    top: "50%",
    marginTop: "-10%",
    marginLeft: "-10%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }

  const[popupActiveAccount, setpopupActiveAccount] = React.useState(popupOff)
  const[popupActiveSetting, setpopupActiveSetting] = React.useState(popupOff)

  const activePopupAccount = (option) => {
    if (option === "on"){
      console.log("Account")
      setpopupActiveAccount(popupOn)
    } else if(option === "off"){
      setpopupActiveAccount(popupOff)
    }
  }

  const activePopupSettings = (option) => {
    if (option === "on"){
      console.log("Configuracion")
      setpopupActiveSetting(popupOn)
    } else if(option === "off"){
      setpopupActiveSetting(popupOff)
    }
  }


  return (
    <div className="mainmenu">
      <header className="header">
        <h2 className="title">
          {user ? `Hola de nuevo ${user?.email}!` : 'Kodonote'}
        </h2>
      </header> 
      <div className="content">
        <Options logOut={logOut} activePopupAccount={activePopupAccount} activePopupSettings={activePopupSettings}/>
        <GridContainer />
      </div>
      <AccoPopUp style={popupActiveAccount} activePopup={activePopupAccount}/> 
      <ConfigPopUp style={popupActiveSetting} activePopup={activePopupSettings}/>
    </div>
  )
}

export default MainMenu
