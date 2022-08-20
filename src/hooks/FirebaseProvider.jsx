import React, {
  createContext, useState, useEffect, useMemo,
} from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfigInfo } from '../firebase/firebaseConfig'

const FirebaseContext = createContext()

const FirebaseProvider = ({ children }) => {
  const [app, setApp] = useState(null)
  const [db, setDb] = useState(null)

  useEffect(() => {
    setApp(initializeApp(firebaseConfigInfo))
  }, [])

  useEffect(() => {
    if (app) setDb(getFirestore(app))
  }, [app])

  const state = useMemo(() => ({ app, db }), [app, db])

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseProvider }
export default FirebaseContext
