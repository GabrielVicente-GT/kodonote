import React, { useState } from "react"
import "./styles/App.css"
import LogregPage from "./LogregPage"
import MainMenu from './MainMenu.js'
import EditorContainer from "./EditorContainer"
//REact Router
import { BrowserRouter, Routes, Route 
} from "react-router-dom"

//autenticacion
import { UserAuthContextProvider } from "./auth/UserAuthContext"

// App -> echa para porbar el iniciar sesion
const App = () => {

    return (
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LogregPage />} />
          <Route path="/main" element={<MainMenu />} />
          <Route path="/editor" element={<EditorContainer />} />
        </Routes>
      </UserAuthContextProvider>
    );
}

export default App