import React from "react"
import "../../styles/LoginPage.css"
import {Link} from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = ({ giveLogin, registerEmail, registerPW, setRegisterPW, setRegisterEmail, auth }) => {
  // Los estados se obtienen del padre, este form los cambia

  // Funcion para realizar un registro
  const register = async () => {
    // Controlar los errores
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPW
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Funcion para verificar la validez de la contraseña
  /*const verifypassword = () => {
    // Obtengo los valores de los inputs
    const pw = document.getElementById("input-password").value;

    const confirmpw = document.getElementById("input-confirm-password").value;

    if (pw === confirmpw) {
      console.log("las contraseñas son iguales");
      if (pw.length <= 6) {
        console.log("la contraseña es muy corta");
      } else {
        console.log("se cumplio la contraseña");
      }
    } else {
      console.log("no son iguales");
    }
  };*/

  return (
    <div className="logreg-form">
      <button className="form-btn-reg" onClick={giveLogin}>
        Volver
      </button>
      <h1 className="lf-titulo"> Registrarse</h1>
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
      <Link to="/main" className="link">
        <button className="form-btn-reg" onClick={register}>
          Registrarse
        </button>
      </Link>
    </div>
  );
}

export default RegisterForm;