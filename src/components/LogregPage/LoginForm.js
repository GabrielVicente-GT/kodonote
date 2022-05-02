import React from "react"
import "../../styles/LoginPage.css"
import {Link} from "react-router-dom"
import logo from '../../graphic-resources/logo-negative.png'
import { signInWithEmailAndPassword } from 'firebase/auth'

// Formulario de iniciar sesion
const LoginForm = ({ giveRegister, setLoginEmail, setLoginPW, loginEmail, loginPW,auth }) => {

  // Funciona igual que el registro
    const login = async () => {
      // Controlar los errores
      try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPW);
        console.log("hola!");
      } catch (error) {
        console.log(error.message);
      }
    }

    return (
      <div className="logreg-form">
        <img src={logo}></img>
        <h1 className="lf-titulo">Bienvenid@</h1>
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

        <Link to="/main" className="link-log">
          <button className="form-btn-is" onClick={login}>Iniciar Sesion</button>
        </Link>

        <button className="form-btn-reg" onClick={giveRegister}>
          Registrarse
        </button>
      </div>
    );
}

export default LoginForm;