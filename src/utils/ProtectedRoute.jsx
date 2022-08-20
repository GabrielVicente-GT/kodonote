import React from 'react'
import propTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../hooks/UserAuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth()
  return user ? children : <Navigate to="/" />
}

ProtectedRoute.propTypes = {
  children: propTypes.node.isRequired,
}

export default ProtectedRoute
