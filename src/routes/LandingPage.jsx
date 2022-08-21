import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo-negative.png'

const LandingPage = () => (
  <div className="landing-page-container">
    <header className="landing-page-header">
      <div className="landing-page-header-logo">
        <img className="landing-page-logo" src={Logo} alt="Logo de Kodonote" />
        <h1>Annotation App</h1>
      </div>
    </header>
    <main className="landing-page-main">
      <h1>Landing Page</h1>
      <Link to="/login">Inicia sesión</Link>
    </main>
  </div>
)

export default LandingPage
