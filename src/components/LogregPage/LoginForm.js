import React from "react"
import "../../styles/LoginPage.css"
import {Link} from "react-router-dom"
import logo from '../../graphic-resources/logo-negative.png'

// Formulario de iniciar sesion
const LoginForm = ({giveRegister}) => {

    return (
        <div className = "logreg-form">
            <img src = {logo}></img>
            <h1 className = "lf-titulo">Bienvenid@</h1>
            <input type="username" id="username " name="username" placeholder="Username" required />
            <input type="password" id="password" name="password" placeholder="Contraseña" required />


            <Link to="/main" className = "link">
                <button className = "form-btn-is">Iniciar Sesion</button>
            </Link>

            <button className = "form-btn-reg" onClick = {giveRegister} >Registrarse</button>
        </div>
    )
}

export default LoginForm;