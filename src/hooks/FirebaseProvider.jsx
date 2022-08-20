import React, { createContext, useState, useEffect, useMemo } from 'react'
import propTypes from 'prop-types'
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

FirebaseProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export { FirebaseProvider }
export default FirebaseContext
