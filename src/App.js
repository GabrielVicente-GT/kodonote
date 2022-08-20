import React from "react"
import "./styles/App.css"
import LogregPage from "./LogregPage"
import MainMenu from './MainMenu'
import Annotations from "./components/Annotations"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./utils/ProtectedRoute"
import { UserAuthContextProvider } from "./hooks/UserAuthContext"
import { FirebaseProvider } from "./hooks/FirebaseProvider"

const App = () => (
  <UserAuthContextProvider>
    <FirebaseProvider>
      <Routes>
        <Route path="/" element={ <LogregPage /> } />
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
