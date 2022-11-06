import React, { useContext, useState } from 'react'
import Options from '../routes/components/options'
import AccoPopUp from '../routes/components/PopupAccount'
import OpinPopUp from '../routes/components/PopupOpi'
import ConfigPopUp from '../routes/components/PopupConfig'
import '../styles/App.css'

const MainMenuMock = () => {

  const setNotes="setNotes"
  const logOut="setNotes"

  const popupOff = {
    fontFamily: 'Hind Madurai, sans-serif',
    display: 'none',
    position: 'fixed',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }

  const popupOn = {
    fontFamily: 'Hind Madurai, sans-serif',
    fontWeight: '300',
    display: 'flex',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-10%',
    marginLeft: '-10%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: '2',
    boxShadow:
      'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  }

  const popupOnOpinion = {
    fontFamily: 'Hind Madurai, sans-serif',
    fontWeight: '300',
    display: 'flex',
    position: 'absolute',
    left: '30%',
    top: '5%',
    height: '90%',
    width: '60%',
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: '2',
    borderRadius: '10px',
    boxShadow:
      'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  }

  const blur = {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: '0.7',
    position: 'fixed',
    zIndex: '1',
  }

  const noBlur = {
    display: 'none',
    width: '100%',
    height: '100%',
    backgroundColor: '#113743',
    opacity: '0.6',
    position: 'fixed',
    zIndex: '1',
  }

  const tableroGridCSS = {
    background: 'var(--accent-color-white)',
    display: 'grid',
    gridTemplateRows: 'repeat(4, 150px)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    gridAutoFlow: 'row',
    padding: '20px',
    width: '100%',
    overflow: 'auto',
    height: 'auto',
    color: '000',
  }

  const tableroNoGridCSS = {
    background: 'var(--accent-color-white)',
    padding: '20px',
    width: '100%',
    overflow: 'auto',
    height: 'auto',
    color: '000',
    gap: '20px'
  }

  const [popupActiveAccount, setpopupActiveAccount] = useState(popupOff)
  const [blurActive, setblurActive] = useState(noBlur)
  const [popupActiveSetting, setpopupActiveSetting] = useState(popupOff)
  const [popupActiveOpinion, setpopupActiveOpinion] = useState(popupOff)

  const [tableroGrid, settableroGrid] = useState(tableroGridCSS)

  const displayGrid = (option) => {
    if (option === 'off') {
      settableroGrid(tableroGridCSS)
    } else if (option === 'on') {
      settableroGrid(tableroNoGridCSS)
    }
  }

  const activePopupAccount = (option) => {
    if (option === 'on') {
      setblurActive(blur)
      setpopupActiveAccount(popupOn)
    } else if (option === 'off') {
      setpopupActiveAccount(popupOff)
      setblurActive(noBlur)
    }
  }

  const activePopupSettings = (option) => {
    if (option === 'on') {
      setpopupActiveSetting(popupOn)
      setblurActive(blur)
    } else if (option === 'off') {
      setpopupActiveSetting(popupOff)
      setblurActive(noBlur)
    }
  }

  const activePopupOpinion = (option) => {
    if (option === 'on') {
      setpopupActiveOpinion(popupOnOpinion)
      setblurActive(blur)
    } else if (option === 'off') {
      setpopupActiveOpinion(popupOff)
      setblurActive(noBlur)
    }
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setblurActive(noBlur)
      setpopupActiveAccount(popupOff)
      setpopupActiveSetting(popupOff)
      setpopupActiveOpinion(popupOff)
    }
  })

  return (
    <div className="mainmenu">
      <div className="blur" style={blurActive} />
      <header className="header" />
      <AccoPopUp
        style={popupActiveAccount} 
        activePopup={activePopupAccount} 
      />
      <ConfigPopUp
        style={popupActiveSetting}
        activePopup={activePopupSettings}
        typeTablero={displayGrid}
      />
      <OpinPopUp 
        style={popupActiveOpinion}
        activePopup={activePopupOpinion}
      />
      <div className="content">
        <Options
          logOut={logOut}
          setNotes={setNotes}
          activePopupAccount={activePopupAccount}
          activePopupSettings={activePopupSettings}
          activePopupOpinion={activePopupOpinion}
        />
      </div>
    </div>
  )
}

export default MainMenuMock
