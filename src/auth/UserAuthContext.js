import React, { createContext, useContext } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import { auth } from "../firebase-config"

// Se cre un contexto
const UserAuthContext = createContext()

/// Variable para manipular el contexto
export const useUserAuth = () => {
    return useContext(UserAuthContext)
}

// Componente que develve el context provider, dentro de el van los componentes que quieran acceder
// A la infomración de la cuenta
export const UserAuthContextProvider = ({ children }) => {

    // Estado para controlar el usuario
    const [user, setUser] = React.useState({})

    React.useEffect(() => {
        // Cada vez que se inica una sesion, se cambia al usuario por el que tiene auth
        // si dejo al sesión iniciada
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, [])

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        console.log("email desde autorcontext: ", email)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        await signOut(auth)
    }

    return(
        <UserAuthContext.Provider value = {{user, logIn, registerUser, logOut /*Se pasan estas funciones a los componentes que als requieran*/}}>
            {children}
        </UserAuthContext.Provider>
    )
}
