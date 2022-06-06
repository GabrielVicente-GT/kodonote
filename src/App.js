import React from "react"
import "./styles/App.css"
import LogregPage from "./LogregPage"
import MainMenu from './MainMenu'
import Annotations from "./components/Annotations"

// React Router
import { 
  Routes, Route 
} from "react-router-dom"

import ProtectedRoute from "./ProtectedRoute"

// autenticacion, crea el contexto para proteger rutas
import { UserAuthContextProvider } from "./auth/UserAuthContext"
import { FirebaseProvider } from "./hooks/FirebaseProvider"

// App -> echa para porbar el iniciar sesion
const App = () => (
  <UserAuthContextProvider>
    <FirebaseProvider>
      <Routes>
        <Route path="/" element={<LogregPage />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <Annotations/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </FirebaseProvider>
  </UserAuthContextProvider>
)

export default App
