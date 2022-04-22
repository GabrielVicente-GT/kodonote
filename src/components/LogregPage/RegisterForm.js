import React from "react"
import "../../styles/LoginPage.css"
import PasswordBlock from "./PasswordBlock";

const RegisterForm = () => {

    const register = () => {
        
    }

    return( 
        
        <div className= "logreg-form">
            <h1 className = "lf-titulo"> Registrarse</h1>
                <input type="username" id="username " name="username" placeholder="Username" required=""/>
                <input type="email" id="email" name="email" placeholder="Email" required=""/>
            <PasswordBlock />
        </div>
    )
}

export default RegisterForm;