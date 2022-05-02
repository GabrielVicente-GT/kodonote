import React from 'react'
import RegisterForm from './components/LogregPage/RegisterForm'
import LoginForm from './components/LogregPage/LoginForm'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import "./styles/LoginPage.css"

function LogregPage({ auth }) {

  // Estado para brindar el form de registrarse o logearse
  const [isReg, setisReg] = React.useState(false)

  // Estado para controlar al usuario conectado
  const [curUser, setCurUser] = React.useState({})

  // Estados para captar lo que escribe el usuario
  // Los sets se mandan a los inputs para que se cambien los datos
  const [registerEmail, setRegisterEmail] = React.useState([""])
  const [registerPW, setRegisterPW] = React.useState([""])

  // Esados para iniciar sesion
  const [loginEmail, setLoginEmail] = React.useState([""])
  const [loginPW, setLoginPW] = React.useState([""])

  // Funcion que detecta un cambio en el usuario que esta iniciando sesion
  onAuthStateChanged(auth, (currentUser) => {
    setCurUser(currentUser)
  })

  // Funciones para dar el form de iniciar sesion o registrarse
  const giveRegister = () => {
    setisReg(true)
  }

  const giveLogin = () => {
    setisReg(false)
  }

  // Funcion para cerrar sesion
  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className="logreg-page">
      <h1>{"hola de nuevo, " + curUser?.email}</h1>
      {isReg ? (
        <RegisterForm
          giveLogin={giveLogin}
          registerPW={registerPW}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          setRegisterPW={setRegisterPW}
          auth = {auth}
        />
      ) : (
        <LoginForm giveRegister={giveRegister}
        loginEmail={loginEmail}
        loginPW={loginPW}
        setLoginEmail={setLoginEmail}
        setLoginPW={setLoginPW}
        auth={auth} />
      )}
    </div>
  );
}

export default LogregPage