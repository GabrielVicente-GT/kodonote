import React from 'react'
import { Navigate } from "react-router-dom"
import { useUserAuth } from './auth/UserAuthContext'

function ProtectedRoute({ children }) {
  // Children es el componentes que queremos proteger

  // llamar al user que esta actalmente en la sesion
  const { user } = useUserAuth()

  // Si el usuario no está autenticado, lo regresamos al login
  return user ? children : <Navigate to="/" />
}

export default ProtectedRoute