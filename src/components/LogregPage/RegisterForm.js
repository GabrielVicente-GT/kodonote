import React from "react"
import "../../styles/LoginPage.css"
import { useUserAuth } from "../../auth/UserAuthContext"

const RegisterForm = ({ giveLogin, registerEmail, registerPW, setRegisterPW, setRegisterEmail, auth, setWelcome, registerPW_conf, setRegisterPW_conf, bgImage }) => {

  const { registerUser } = useUserAuth()

  const [registerError, setRegisterError] = React.useState("")
  const [termsAgreed, setTermsAgreed] = React.useState(false)

  const handleError = (error) => {
    if (error === "auth/weak-password") {
      setRegisterError("La contraseña debe tener al menos 6 caracteres")
    } else if (error === "auth/invalid-email") {
      setRegisterError("Has ingresado un email inexistente o inválido")
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(registerPW, registerPW_conf)
    if (termsAgreed) {
      try {
        if (registerPW === registerPW_conf) {
          await registerUser(registerEmail, registerPW)
        } else {
          alert("Las contraseñas ingresadas no coinciden")
        }
        giveLogin()
        setWelcome("¡Te has registrado!")
      } catch(error) {
        handleError(error.code)
        console.log(error.code)
      }
    }
  }

  return (
    <div className="logreg-form">
      <div className="logreg-form-image-alt" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="logreg-form-image-shadow-alt">
          <h1>El primer paso para tomar apuntes es registrarte</h1>
        </div>
      </div>
      <div className="logreg-form-info">
        <h1 className="lf-titulo">Regístrate</h1>
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
          input="true"
          type="password"
          name="password"
          placeholder="Confirmar contrase&ntilde;a"
          required=""
          id="input-confirm-password"
          onChange={(event) => {
            setRegisterPW_conf(event.target.value);
          }}
        />
        <div className="terms">
          <label htmlFor="terms-input">
            Acepto los términos y condiciones
          </label>
          <input type="checkbox" id="terms-input" onChange={(event) => setTermsAgreed(event.target.value)} />
        </div>
        <button className="form-btn-reg" onClick={handleSubmit}>
          Registrarse
        </button>
        <span>¿Ya tienes una cuenta? Inicia sesión <p onClick={giveLogin}>aquí</p></span>
      </div>
    </div>
  )
}

export default RegisterForm
