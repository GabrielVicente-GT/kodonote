import React from "react"

const Formato = () => {
    return(
        <div className = "login-form">
            <div className = "limits">
                <h1 className = "lf-titulo"> Bienvenid@</h1>
                <div className = "form-input">
                    <input type="username" id="username " name="username" placeholder="Username" required=""/>
                    <input type="password" id="password" name="password" placeholder="Contrase&ntilde;a" required=""/>
                </div>
                <div className = "form-buttons">
                    <button className = "form-btn-is">Iniciar Sesion</button>
                    <button className = "form-btn-reg" >Registrarse</button>
                </div>

            </div>
        </div>
    )
}

const Registro = () => {
    return(
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
    )
}