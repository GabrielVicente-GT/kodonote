import React, { useContext } from 'react'
import GridContainer from './components/GridContainer'
import Options from './components/options'
import AccoPopUp from './components/PopupAccount'
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

  const[popupActive, setpopupActive] = React.useState(popupOff)

  const activePopup = (option) => {

    if (option === "on"){
      setpopupActive(popupOn)
    } else if(option === "off"){
      setpopupActive(popupOff)
    }
  }


  return (
    <div className="mainmenu">
      <AccoPopUp style={popupActive} activePopup={activePopup}/> 
      <header className="header">
        <h2 className="title">
          {user ? `Hola de nuevo ${user?.email}!` : 'Kodonote'}
        </h2>
      </header>
      <div className="content">
        <Options logOut={logOut} activePopup={activePopup}/>
        <GridContainer />
      </div>
    </div>
  )
}

export default MainMenu
