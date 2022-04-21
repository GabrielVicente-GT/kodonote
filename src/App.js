import React from "react"
import Login from "./components/Login.js"
import "./styles/App.css"
//probando 2
// Probando...
const App = () => {

    const registerMode = false

    return (
        (registerMode) ? (
            <Login />
        ) : (
            <Login />
        )
    )
}

export default App