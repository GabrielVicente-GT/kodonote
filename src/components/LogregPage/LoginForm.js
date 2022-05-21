import React from "react"
import "../../styles/LoginPage.css"
import { useNavigate } from "react-router-dom"
import logo from '../../graphic-resources/logo-negative.png'
import { useUserAuth } from "../../auth/UserAuthContext"

// Formulario de iniciar sesion
const LoginForm = ({ text, giveRegister, setLoginEmail, setLoginPW, loginEmail, loginPW, auth }) => {

  // importar funcion de el authcontext
  const { logIn }  = useUserAuth()

  // Estado de errores
  const [loginError, setLoginError] = React.useState("")

  // Necesaria para permitir el ingreso a la login page, navegar por las paginas
  const navigate = useNavigate()

  // Manejar errores segun los codigos de Firebase
  const handleError = (error) => {
    if (error === "auth/wrong-password") {
      setLoginError("Contraseña incorrecta")
    } else if (error === "auth/invalid-email") {
      setLoginError("Has ingresado un email inexistente o invalido")
    } else if (error === "auth/user-not-found") {
      setLoginError("Este correo no está registrado")
    }
  }

  //Funcion para controlar el login
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Esperar a que se haga el login
      await logIn(loginEmail, loginPW)
      // Al ahcerlo el usuario sera enviado a la pagina principal
      navigate("/main")
    } catch(error) {
      handleError(error.code)
      console.log(error.code)
    }
  }

  return (
    <div className="logreg-form">
      <img src={logo} alt="logotipo"></img>
      <h1 className="lf-titulo">{text}</h1>
      {loginError && <p className="error">{loginError}</p>}
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
      <button className="form-btn-is" onClick={handleSubmit}>
        Iniciar Sesion
      </button>
      <button className="form-btn-reg" onClick={giveRegister}>
        Registrarse
      </button>
    </div>
  )
}

export default LoginForm
