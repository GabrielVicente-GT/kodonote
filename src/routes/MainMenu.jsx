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
    zIndex: "2",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
  }

  const blur = {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: "0.7",
    position: "fixed",
    zIndex: "1"
  }

  const noBlur = {
    display: "none",
    width: "100%",
    height: "100%",
    backgroundColor: "#113743",
    opacity: "0.6",
    position: "fixed",
    zIndex: "1"
  }

  const[popupActiveAccount, setpopupActiveAccount] = React.useState(popupOff)
  const[blurActive, setblurActive] = React.useState(noBlur)
  const[popupActiveSetting, setpopupActiveSetting] = React.useState(popupOff)

  const activePopupAccount = (option) => {
    if (option === "on"){
      console.log("Account")
      setblurActive(blur)
      setpopupActiveAccount(popupOn)
    } else if(option === "off"){
      setpopupActiveAccount(popupOff)
      setblurActive(noBlur)
    }
  }

  const activePopupSettings = (option) => {
    if (option === "on"){
      console.log("Configuracion")
      setpopupActiveSetting(popupOn)
      setblurActive(blur)
    } else if(option === "off"){
      setpopupActiveSetting(popupOff)
      setblurActive(noBlur)
    }
  }

  const div = document.querySelector('.mainmenu')
  if (div !== null){
    div.addEventListener('click', () => {
      setblurActive(noBlur)
      setpopupActiveAccount(popupOff)
      setpopupActiveSetting(popupOff)
    })
  
    window.addEventListener('keydown', (event) => {
      if (event.key === "Escape"){
        setblurActive(noBlur)
        setpopupActiveAccount(popupOff)
        setpopupActiveSetting(popupOff)
      }
    })
  }

  return (
    <div className="mainmenu">
      <div className='blur' style={blurActive}/>
      <header className="header">
        <h2 className="title">
          {user ? `Hola de nuevo ${user?.email}!` : 'Kodonote'}
        </h2>
      </header> 
      <AccoPopUp style={popupActiveAccount} activePopup={activePopupAccount}/> 
      <ConfigPopUp style={popupActiveSetting} activePopup={activePopupSettings}/>
      <div className="content">
        <Options logOut={logOut} activePopupAccount={activePopupAccount} activePopupSettings={activePopupSettings}/>
        <GridContainer />
      </div>
    </div>
  )
}

export default MainMenu
