import React, { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import LoginBackgroundImage from '../images/code.jpg'
import '../styles/LoginPage.css'

const LogregPagemock = () => {
  const [welcomeText, setWelcomeText] = useState('Bienvenid@')
  const [isReg, setIsReg] = useState(false)
  const [registerEmail, setRegisterEmail] = useState()
  const [registerPassword, setRegisterPassword] = useState()
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState()
  const [loginEmail, setLoginEmail] = useState()
  const [loginPassword, setLoginPassword] = useState()

  const giveRegister = () => {
    setIsReg(true)
  }

  const giveLogin = () => {
    setIsReg(false)
  }

  return (
    <div className="logreg-page">
      {isReg ? (
        <RegisterForm
          setWelcome={setWelcomeText}
          giveLogin={giveLogin}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          registerPassword={registerPassword}
          setRegisterPassword={setRegisterPassword}
          registerPasswordConfirm={registerPasswordConfirm}
          setRegisterPasswordConfirm={setRegisterPasswordConfirm}
          bgImage={LoginBackgroundImage}
        />
      ) : (
        <LoginForm
          welcomeText={welcomeText}
          giveRegister={giveRegister}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          bgImage={LoginBackgroundImage}
        />
      )}
    </div>
  )
}

export default LogregPagemock
