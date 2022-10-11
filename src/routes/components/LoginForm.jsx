import React, { useContext, useState } from 'react'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo-negative.png'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import '../../styles/LoginPage.css'

const LoginForm = ({
  welcomeText,
  giveRegister,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  bgImage,
}) => {
  const { logIn } = useContext(UserAuthContext)
  const [loginError, setLoginError] = useState('')

  const navigate = useNavigate()

  const handleError = (error) => {
    let msg = ''

    if (error === 'auth/wrong-password') {
      setLoginError('Contraseña incorrecta')
      msg = 'case 1'

    } if (error === 'auth/invalid-email') {
      setLoginError('Has ingresado un email inexistente o invalido')
      msg = 'case 2'

    } if (error === 'auth/user-not-found') {
      setLoginError('Este correo no está registrado')
      msg = 'case 3'
    }

    return msg
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await logIn(loginEmail, loginPassword)
      navigate('/main')
    } catch (error) {
      handleError(error.code)
    }
  }

  const handleEnterSubmit = async () => {
    try {
      await logIn(loginEmail, loginPassword)
      navigate('/main')
    } catch (error) {
      handleError(error.code)
    }
  }

  window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') handleEnterSubmit()
  })

  return (
    <div className="logreg-form">
      <div className="logreg-form-info">
        <img src={logo} alt="logotipo" />
        <h1 className="lf-titulo">{welcomeText}</h1>
        {loginError && <p className="error">{loginError}</p>}
        <input
          type="Email"
          id="Email"
          name="Email"
          placeholder="Email"
          required
          onChange={(event) => {
            setLoginEmail(event.target.value)
          }}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
          onChange={(event) => {
            setLoginPassword(event.target.value)
          }}
        />
        <button type="button" className="form-btn-is" onClick={handleSubmit}>
          Iniciar Sesión
        </button>
        <span className="login-span">
          ¿No tienes una cuenta? Regístrate{' '}
          <button type="button" className="link-button" onClick={giveRegister}>
            aquí
          </button>
        </span>
      </div>
      <div
        className="logreg-form-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="logreg-form-image-shadow">
          <h1>Los apuntes de tus sueños a tu alcance</h1>
        </div>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  welcomeText: propTypes.string.isRequired,
  giveRegister: propTypes.func.isRequired,
  loginEmail: propTypes.string.isRequired,
  setLoginEmail: propTypes.func.isRequired,
  loginPassword: propTypes.string.isRequired,
  setLoginPassword: propTypes.func.isRequired,
  bgImage: propTypes.string.isRequired,
}

export default LoginForm


