import React, { createContext, useContext, useMemo } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const UserAuthContext = createContext()

export const useUserAuth = () => {
  return useContext(UserAuthContext)
}

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({})

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    console.log('email desde autorcontext: ', email)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    await signOut(auth)
  }

  const state = useMemo(() => ({ user, logIn, registerUser, logOut }), [user])

  return (
    <UserAuthContext.Provider value={state}>
      {children}
    </UserAuthContext.Provider>
  )
}
