import React from "react"
import "../styles/LoginPage.css"

const RegisterForm = () => {
    return(
        <div className = "pagina">
        <div className= "login-form">
            <div className = "limits">
                <h1 className = "lf-titulo"> Registrarse</h1>
                <div className = "form-input-registro">
                    <input type="username" id="username " name="username" placeholder="Username" required=""/>
                    <input type="email" id="email" name="email" placeholder="Email" required=""/>
                    <input type="password" id="password" name="password" placeholder="Contrase&ntilde;a" required=""/>
                    <input input type="password" id="password" name="password" placeholder="Confirmar contrase&ntilde;a" required=""/>
                </div>
                <div className = "form-buttons-registro">
                    <button className = "form-btn-reg">Registrarse</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RegisterForm;