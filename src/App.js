import React from 'react'
import LogregPage from './routes/LogregPage'
import MainMenu from './routes/MainMenu'
import Annotations from './routes/Annotations'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import { UserAuthContextProvider } from './hooks/UserAuthContext'
import { FirebaseProvider } from './hooks/FirebaseProvider'
import './styles/App.css'

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
              <Annotations />
            </ProtectedRoute>
          }
        />
      </Routes>
    </FirebaseProvider>
  </UserAuthContextProvider>
)

export default App
