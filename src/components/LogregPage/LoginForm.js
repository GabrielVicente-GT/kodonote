import React from "react"
import "../../styles/LoginPage.css"
import { useNavigate } from "react-router-dom"
import logo from '../../images/logo-negative.png'
import { useUserAuth } from "../../hooks/UserAuthContext"

const LoginForm = ({ text, giveRegister, setLoginEmail, setLoginPW, loginEmail, loginPW, auth, bgImage }) => {

  const { logIn }  = useUserAuth()

  const [loginError, setLoginError] = React.useState("")

  const navigate = useNavigate()

  const handleError = (error) => {
    if (error === "auth/wrong-password") {
      setLoginError("Contraseña incorrecta")
    } else if (error === "auth/invalid-email") {
      setLoginError("Has ingresado un email inexistente o invalido")
    } else if (error === "auth/user-not-found") {
      setLoginError("Este correo no está registrado")
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await logIn(loginEmail, loginPW)
      navigate("/main")
    } catch(error) {
      handleError(error.code)
      console.log(error.code)
    }
  }

  return (
    <div className="logreg-form">
      <div className="logreg-form-info">
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
          Iniciar Sesión
        </button>
        <span>¿No tienes una cuenta? Regístrate <p onClick={giveRegister}>aquí</p></span>
      </div>
      <div className="logreg-form-image" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="logreg-form-image-shadow">
          <h1>Los apuntes de tus sueños a tu alcance</h1>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
