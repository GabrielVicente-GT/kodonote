import React, { createContext, useContext } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import { auth } from "../firebase-config"

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {

    // Estado para controlar el usuario
    const [user, setUser] = React.useState({})

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    React.useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, [])

    return(
        <UserAuthContext.Provider value = {{user, logIn, registerUser /*Se pasan estas funciones a los componentes que als requieran*/}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(UserAuthContext)
}