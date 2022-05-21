import React, { useState } from "react"
import "./styles/App.css"
import GridContainer from "./components/ContainerNB.js"
import Options from "./components/options.js"
import { useUserAuth } from "./auth/UserAuthContext"

const MainMenu = () => {

  const { user, logOut } = useUserAuth()
  const [notes, setNotes] = useState(" ")

  return (
    <div>
      <header className="header">
        <h2 className="title">{user ? "Hola de nuevo " + user?.email + "!" : "Kodonote"}</h2>
      </header>
      <div className="content">
        <Options logOut={logOut} setNotes={setNotes}/>
        <GridContainer notes={notes}/>
      </div>
    </div>
  )
}

export default MainMenu
