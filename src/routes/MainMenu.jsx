import React, { useState } from 'react'
import GridContainer from './components/ContainerNB'
import Options from './components/options'
import { useUserAuth } from '../hooks/UserAuthContext'
import '../styles/App.css'

const MainMenu = () => {
  const { user, logOut } = useUserAuth()
  const [notes, setNotes] = useState('')

  return (
    <div>
      <header className="header">
        <h2 className="title">
          {user ? 'Hola de nuevo ' + user?.email + '!' : 'Kodonote'}
        </h2>
      </header>
      <div className="content">
        <Options logOut={logOut} setNotes={setNotes} />
        <GridContainer notes={notes} />
      </div>
    </div>
  )
}

export default MainMenu
