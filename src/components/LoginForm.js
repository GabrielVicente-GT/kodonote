import React from "react"
import "../styles/LoginPage.css"

// Formulario de iniciar sesion
const LoginForm = ({giveRegister}) => {

    return (
        <div className = "login-form">
            <div className = "limits">
                <h1 className = "lf-titulo"> Bienvenid@</h1>
                <div className = "form-input">
                    <input type="username" id="username " name="username" placeholder="Username" required />
                    <input type="password" id="password" name="password" placeholder="Contraseña" required />
                </div>
                <div className = "form-buttons">
                    <button className = "form-btn-is">Iniciar Sesion</button>
                    <button className = "form-btn-reg" onClick = {giveRegister} >Registrarse</button>
                </div>

            </div>
        </div>
    )
}

export default LoginForm;