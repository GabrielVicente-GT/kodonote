import React from "react"
import "../../styles/LoginPage.css"
import {Link} from "react-router-dom"
import { useUserAuth } from "../../auth/UserAuthContext"

const RegisterForm = ({ giveLogin, registerEmail, registerPW, setRegisterPW, setRegisterEmail, auth }) => {
  // Los estados se obtienen del padre, este form los cambia

  // Obtener metodos del proveedor de contexto
  const { registerUser } = useUserAuth()

  // Estado de errores
  const [registerError, setRegisterError] = React.useState("")

  //Funcion para controlar el registro
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await registerUser(registerEmail, registerPW)
    } catch(error){
      setRegisterError(error.message)
      console.log(error.message)
    }
  }


  return (
    <div className="logreg-form">
      <button className="form-btn-reg" onClick={giveLogin}>
        Volver
      </button>
      <h1 className="lf-titulo"> Registrarse</h1>
      {registerError && <p>{registerError}</p>}
      <input
        type="username"
        id="username "
        name="username"
        placeholder="Username"
        required=""
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required=""
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="Contrase&ntilde;a"
        required=""
        id="input-password"
        onChange={(event) => {
          setRegisterPW(event.target.value);
        }}
      />
      <input
        input
        type="password"
        name="password"
        placeholder="Confirmar contrase&ntilde;a"
        required=""
        id="input-confirm-password"
      />
        <button className="form-btn-reg" onClick={handleSubmit}>
          Registrarse
        </button>
    </div>
  );
}

export default RegisterForm;