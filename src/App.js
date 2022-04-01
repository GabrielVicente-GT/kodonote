import React from "react"
import Login from "./components/Login.js"
import "./styles/App.css"

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