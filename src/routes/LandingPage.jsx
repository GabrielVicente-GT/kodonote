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
        <Link className="landing-page-link" to="/login">Ingresa a Kodonote</Link>
      </div>
    </header>
    <main className="landing-page-main">
      <div className="landing-page-card">
        <h1>Landing Page</h1>
        <span>
          Inicia sesión dando click {' '}
          <Link to="/login">aquí</Link>
        </span>
      </div>
    </main>
  </div>
)

export default LandingPage
