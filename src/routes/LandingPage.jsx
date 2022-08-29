import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo-negative.png'
import '../styles/LandingPage.css'

const LandingPage = () => (
  <div className="landing-page-container">
    <header className="landing-page-header">
      <div className="landing-page-header-logo">
        <img className="landing-page-logo" src={Logo} alt="Logo de Kodonote" />
        <h1>Kodonote</h1>
      </div>
      <div className="landing-page-header-link">
        <Link className="landing-page-link" to="/login">
          Ingresa a Kodonote
        </Link>
      </div>
    </header>
    <main className="landing-page-main">
      <div className="landing-page-card">
        <h1 className="card-title">¡Bienvenido a Kodonote!</h1>
        <p className="card-paragraph">
          Kodonote es una aplicación web que te permite crear notas de manera
          ágil y sencilla. Crea notas, edita y elimina notas, todo desde una
          interfaz amigable y fácil de usar. ¡Comienza ahora!
        </p>
        <span className="card-link">
          Inicia sesión dando click&nbsp;
          <Link className="card-link-clickable" to="/login">
            aquí
          </Link>
        </span>
      </div>
    </main>
  </div>
)

export default LandingPage
