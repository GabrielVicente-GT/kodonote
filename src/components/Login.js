import React from "react"
import "../styles/Login.css"

const Login = () => {
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
                    <button className = "form-btn-reg">Registrarse</button>
                </div>

            </div>
        </div>
    )
}

export default Login;