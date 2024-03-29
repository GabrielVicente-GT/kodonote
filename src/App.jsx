import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import LogregPage from './routes/LogregPage'
import MainMenu from './routes/MainMenu'
import Annotations from './routes/Annotations'
import ThemesPage from './routes/ThemesPage'
import ProtectedRoute from './utils/ProtectedRoute'
import UserAuthProvider from './hooks/UserAuthProvider'
import FirebaseProvider from './hooks/FirebaseProvider'
import FocusedNotebookProvider from './hooks/FocusedNotebookProvider'
import ThemeProvider from './hooks/ThemeProvider'
import MyThemes from './routes/MyThemesPage'
import './styles/App.css'

const App = () => (
  <UserAuthProvider>
    <FirebaseProvider>
      <ThemeProvider>
      <FocusedNotebookProvider>
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
            <Route
              exact
              path="/themes"
              element={
                <ProtectedRoute>
                  <ThemesPage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/my-themes"
              element={
                <ProtectedRoute>
                  <MyThemes />
                </ProtectedRoute>
              }
            />
          </Routes>
        </FocusedNotebookProvider>
      </ThemeProvider>
    </FirebaseProvider>
  </UserAuthProvider>
)

export default App
