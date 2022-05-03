import React from "react"
import "../../styles/LoginPage.css"
import {Link} from "react-router-dom"
import logo from '../../graphic-resources/logo-negative.png'
import { useUserAuth } from "../../auth/UserAuthContext"
// Formulario de iniciar sesion
const LoginForm = ({ giveRegister, setLoginEmail, setLoginPW, loginEmail, loginPW,auth }) => {

  // importar funcion de el authcontext
  const { logIn }  = useUserAuth()

  // Estado de errores
  const [loginError, setLoginError] = React.useState("")

  //Funcion para controlar el login
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await logIn(loginEmail, loginPW)
    } catch(error){
      setLoginError(error.message)
      console.log(error.message)
    }
  }
    return (
      <div className="logreg-form">
        <img src={logo}></img>
        <h1 className="lf-titulo">Bienvenid@</h1>
        {loginError && <p>{loginError}</p>}
        <input
          type="Email"
          id="Email"
          name="Email"
          placeholder="Email"
          required
          onChange={(event) => {setLoginEmail(event.target.value)}}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
          onChange={(event) => {setLoginPW(event.target.value)}}
        />

          <button className="form-btn-is" onClick={handleSubmit}>Iniciar Sesion</button>

        <button className="form-btn-reg" onClick={giveRegister}>
          Registrarse
        </button>
      </div>
    );
}

export default LoginForm;