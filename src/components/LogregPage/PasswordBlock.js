import React from 'react'
import "../../styles/LoginPage.css"
import {Link} from "react-router-dom"

function PasswordBlock() {
    const verifypassword = () => {

        // Obtengo los valores de los inputs
        const pw = document.getElementById("input-password").value

        const confirmpw = document.getElementById("input-confirm-password").value

        if (pw === confirmpw) {
            console.log("las contraseñas son iguales")
            if(pw.length <= 6){
                console.log("la contraseña es muy corta")
            } else{
                console.log("se cumplio la contraseña")
            }
        }

        else{
            console.log("no son iguales")
        }

    }
  return (
    <div className = "pw-block">
      <input type="password" name="password" placeholder="Contrase&ntilde;a" required="" id = "input-password"/>
      <input input type="password" name="password" placeholder="Confirmar contrase&ntilde;a" required="" id = "input-confirm-password"/>
      <Link to="/main" className = "link">
        <button className = "form-btn-reg" onClick = {verifypassword}>Registrarse</button>
      </Link>
    </div>
  )
}

export default PasswordBlock