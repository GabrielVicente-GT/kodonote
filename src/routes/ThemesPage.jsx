import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo-negative.png'
import themes from '../utils/themeGetter'
import '../styles/ThemesPage.css'

const ThemesPage = () => {
  const [purchasedTheme, setPurchasedTheme] = useState()
  const [onPurchaseProcess, setOnPurchaseProcess] = useState(false)

  return (
    <>
      <header>
        <h2>Observa y compra temas para Kodonote</h2>
      </header>
      <aside>
        <img src={Logo} alt="Logo de Kodonote" />
        <input
          type="text"
          name="theme-search-bar"
          id="theme-search-bar"
          className="theme-search-bar"
          placeholder="Buscar tema"
        />
        <button type="button" className="theme-aside-button">Ver mis temas</button>
        <Link to="/main" className="theme-aside-button">Volver</Link>
      </aside>
      <main>
        {themes.map((theme) => (
          <div className="theme-card">
            <img src={theme.source} alt="Tema de Kodonote" />
            <div className="theme-info">
              <div className="theme-title">
                <h3>{theme.title}</h3>
              </div>
              <div className="theme-purchase-info">
                <span>{theme.price}</span>
                <div className="theme-purchase-button">
                  <button type="button" onClick={() => {
                    setPurchasedTheme(theme)
                    setOnPurchaseProcess(true)
                  }}>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      {(onPurchaseProcess) ? (
        null
      ) : (
        null
      )}
    </>
  )
}

export default ThemesPage
