import React, { useContext } from 'react'
import GridContainer from './components/GridContainer'
import Options from './components/options'
import { UserAuthContext } from '../hooks/UserAuthProvider'
import '../styles/App.css'

const MainMenu = () => {
  const { user, logOut } = useContext(UserAuthContext)

  return (
    <div className="mainmenu">
      <header className="header">
        <h2 className="title">
          {user ? `Hola de nuevo ${user?.email}!` : 'Kodonote'}
        </h2>
      </header>
      <div className="content">
        <Options logOut={logOut} />
        <GridContainer />
      </div>
    </div>
  )
}

export default MainMenu
