import React from "react"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDJcbo1oRvSTTT_FcLJ8cPTRoVq0gVFlc",
  authDomain: "kodonote.firebaseapp.com",
  projectId: "kodonote",
  storageBucket: "kodonote.appspot.com",
  messagingSenderId: "223135808540",
  appId: "1:223135808540:web:9b595e4b74c4a14b89f3d9",
  measurementId: "G-EVB7GZ1F7T",
}

const FirebaseContext = React.createContext()

const FirebaseProvider = ({ children }) => {

  const [app, setApp] = React.useState(null)
  const [db, setDb] = React.useState(null)

  React.useEffect(() => {
    setApp(initializeApp(firebaseConfig))
  }, [])

  React.useEffect(() => {
    if (app) setDb(getFirestore(app))
  }, [app])

  const state = {
    app,
    db,
  }

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseProvider }
export default FirebaseContext
