import React, { createContext, useContext, useMemo } from 'react'
import propTypes from 'prop-types'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const UserAuthContext = createContext()

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({})

  React.useEffect(() => {
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

UserAuthContextProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export const useUserAuth = () => useContext(UserAuthContext)

export default UserAuthContextProvider
