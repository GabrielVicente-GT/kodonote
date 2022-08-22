import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import LogregPage from './routes/LogregPage'
import MainMenu from './routes/MainMenu'
import Annotations from './routes/Annotations'
import ProtectedRoute from './utils/ProtectedRoute'
import UserAuthContextProvider from './hooks/UserAuthContext'
import { FirebaseProvider } from './hooks/FirebaseProvider'
import './styles/App.css'

const App = () => (
  <UserAuthContextProvider>
    <FirebaseProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LogregPage />} />
        <Route
          exact
          path="/main"
          element={
            <ProtectedRoute>
              <MainMenu />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/editor"
          element={
            <ProtectedRoute>
              <Annotations />
            </ProtectedRoute>
          }
        />
      </Routes>
    </FirebaseProvider>
  </UserAuthContextProvider>
)

export default App