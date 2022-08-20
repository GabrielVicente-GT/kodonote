import React from "react"
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import LoginBackgroundImage from "../images/code.jpg"
import "../styles/LoginPage.css"

const LogregPage = ({ auth }) => {

  const [isReg, setisReg] = React.useState(false)
  const [welcome, setWelcome] = React.useState("Bienvenid@")
  const [registerEmail, setRegisterEmail] = React.useState([""])
  const [registerPW, setRegisterPW] = React.useState([""])
  const [registerPW_conf, setRegisterPW_conf] = React.useState([""])
  const [loginEmail, setLoginEmail] = React.useState([""])
  const [loginPW, setLoginPW] = React.useState([""])

  const giveRegister = () => {
    setisReg(true)
  }

  const giveLogin = () => {
    setisReg(false)
  }

  return (
    <div className="logreg-page">
      {(isReg) ? (
        <RegisterForm
          giveLogin={giveLogin}
          registerPW={registerPW}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          setRegisterPW={setRegisterPW}
          auth={auth}
          setWelcome={setWelcome}
          registerPW_conf= {registerPW_conf}
          setRegisterPW_conf={setRegisterPW_conf}
          bgImage={LoginBackgroundImage}
        />
      ) : (
        <LoginForm
          text={welcome}
          giveRegister={giveRegister}
          loginEmail={loginEmail}
          loginPW={loginPW}
          setLoginEmail={setLoginEmail}
          setLoginPW={setLoginPW}
          auth={auth}
          bgImage={LoginBackgroundImage}
        />
      )}
    </div>
  )
}

export default LogregPage
