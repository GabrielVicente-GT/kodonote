import React from 'react'
import RegisterForm from './components/LogregPage/RegisterForm'
import LoginForm from './components/LogregPage/LoginForm'

import logo from './graphic-resources/logo-negative.png'

import "./styles/LoginPage.css"

function LogregPage() {
  return (
    <div className = 'logreg-page'>
      <img src = {logo}></img>
      <LoginForm/>
      
    </div>
  )
}

export default LogregPage