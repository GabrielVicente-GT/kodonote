import React, { createContext, useState, useEffect, useMemo } from 'react'
import propTypes from 'prop-types'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const UserAuthContext = createContext()

const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const logIn = (email, password) => {
    console.log('email desde autorcontext: ', email)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    await signOut(auth)
  }

  const state = useMemo(
    () => ({
      user,
      logIn,
      registerUser,
      logOut,
    }),
    [user]
  )

  return (
    <UserAuthContext.Provider value={state}>
      {children}
    </UserAuthContext.Provider>
  )
}

UserAuthProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export { UserAuthContext }
export default UserAuthProvider
