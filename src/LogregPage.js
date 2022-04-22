import React from 'react'
import RegisterForm from './components/LogregPage/RegisterForm'
import LoginForm from './components/LogregPage/LoginForm'



import "./styles/LoginPage.css"

function LogregPage() {

  const [isReg, setisReg] = React.useState(false)

  const giveRegister = () => {
    setisReg(true)
  }

  return (
    <div className = 'logreg-page'>
      {
        isReg ? <RegisterForm/> : <LoginForm giveRegister = {giveRegister}/>
      }
    </div>
  )
}

export default LogregPage