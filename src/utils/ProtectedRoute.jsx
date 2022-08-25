import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { UserAuthContext } from '../hooks/UserAuthProvider'

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserAuthContext)
  return user ? children : <Navigate to="/" />
}

ProtectedRoute.propTypes = {
  children: propTypes.node.isRequired,
}

export default ProtectedRoute
