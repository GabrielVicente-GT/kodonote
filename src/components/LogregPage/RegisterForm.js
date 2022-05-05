import React from "react"
import "../../styles/LoginPage.css"
import { useUserAuth } from "../../auth/UserAuthContext"

const RegisterForm = ({ giveLogin, registerEmail, registerPW, setRegisterPW, setRegisterEmail, auth, setWelcome }) => {
  // Los estados se obtienen del padre, este form los cambia

  // Obtener metodos del proveedor de contexto
  const { registerUser } = useUserAuth()

  // Estado de errores
  const [registerError, setRegisterError] = React.useState("")

  // Manejar errores segun los codigos de Firebase
  const handleError = (error) => {
    if(error === "auth/weak-password"){
      setRegisterError("La contrasña debe tener al menos 6 caracteres")
    } else if(error === "auth/invalid-email"){
      setRegisterError("Has ingresado un email inexistente o invalido")
    }
  }

  //Funcion para controlar el registro
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await registerUser(registerEmail, registerPW)
      // Al realizarse el registro, ejecutar el login
      giveLogin()
      setWelcome("¡Te has registrado!")
    } catch(error){
      handleError(error.code)
      console.log(error.code)
    }
  }


  return (
    <div className="logreg-form">
      <button className="form-btn-reg" onClick={giveLogin}>
        Volver
      </button>
      <h1 className="lf-titulo"> Registrarse</h1>
      {registerError && <p className="error">{registerError}</p>}
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