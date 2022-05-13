import React from 'react'
import RegisterForm from './components/LogregPage/RegisterForm'
import LoginForm from './components/LogregPage/LoginForm'
import "./styles/LoginPage.css"

function LogregPage({ auth }) {

  // Estado para brindar el form de registrarse o logearse
  const [isReg, setisReg] = React.useState(false)

  // Estado dedicado a mostrar texto depdndeindo de las acciones en la pagina
  const [welcome, setWelcome] = React.useState("Bienvenid@")

  // Estados para captar lo que escribe el usuario
  // Los sets se mandan a los inputs para que se cambien los datos
  const [registerEmail, setRegisterEmail] = React.useState([""])
  const [registerPW, setRegisterPW] = React.useState([""])
  const [registerPW_conf, setRegisterPW_conf] = React.useState([""])

  // Esados para iniciar sesion
  const [loginEmail, setLoginEmail] = React.useState([""])
  const [loginPW, setLoginPW] = React.useState([""])

  
  // Funciones para dar el form de iniciar sesion o registrarse
  const giveRegister = () => {
    setisReg(true)
  }

  const giveLogin = () => {
    setisReg(false)
  }

  return (
    <div className="logreg-page">
      {isReg ? (
        <RegisterForm
          giveLogin={giveLogin}
          registerPW={registerPW}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          setRegisterPW={setRegisterPW}
          auth = {auth}
          setWelcome={setWelcome}
          registerPW_conf= {registerPW_conf}
          setRegisterPW_conf={setRegisterPW_conf}
        />
      ) : (
        <LoginForm
        text = {welcome}
        giveRegister={giveRegister}
        loginEmail={loginEmail}
        loginPW={loginPW}
        setLoginEmail={setLoginEmail}
        setLoginPW={setLoginPW}
        auth={auth} />
      )}
    </div>
  )
}

export default LogregPage
