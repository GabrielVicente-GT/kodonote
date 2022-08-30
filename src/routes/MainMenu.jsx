import React, { useContext } from 'react'
import GridContainer from './components/GridContainer'
import Options from './components/options'
import PopUp from './components/PopUp'
import { UserAuthContext } from '../hooks/UserAuthProvider'
import '../styles/App.css'

const MainMenu = () => {
  const { user, logOut } = useContext(UserAuthContext)

  // Estilo inicial
  const popupOff = {
    display: "none",
    position: "fixed",
    width: "100px",
    height: "100px",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }

  const popupOn = {
    display: "block",
    position: "absolute",
    width: "100px",
    height: "100px",
    left: "50%",
    top: "50%",
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
      <PopUp title="holadsadsd" style={popupActive}/> 
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
