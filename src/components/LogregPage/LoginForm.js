import React from "react"
import "../../styles/LoginPage.css"

// Formulario de iniciar sesion
const LoginForm = ({giveRegister}) => {

    

    return (
        <div className = "logreg-form">
            <h1 className = "lf-titulo">Bienvenid@</h1>
            <input type="username" id="username " name="username" placeholder="Username" required />
            <input type="password" id="password" name="password" placeholder="Contraseña" required />
            <button className = "form-btn-is">Iniciar Sesion</button>
            <button className = "form-btn-reg" onClick = {giveRegister} >Registrarse</button>
        </div>
    )
}

export default LoginForm;