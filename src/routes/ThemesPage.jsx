import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../hooks/ThemeProvider'
import ThemeCard from './components/ThemeCard'
import Logo from '../images/logo-negative.png'
import themes from '../utils/themeGetter'
import '../styles/ThemesPage.css'

const ThemesPage = () => {
  const { setBackgroundTheme } = useContext(ThemeContext)

  const [purchasedTheme, setPurchasedTheme] = useState()
  const [onPurchaseProcess, setOnPurchaseProcess] = useState(false)

  const purchasing = (selectedTheme) => {
    setPurchasedTheme(selectedTheme)
    setOnPurchaseProcess(true)
  }

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
      <main className="themes-main">
        {themes.map((availableTheme) => (
          <ThemeCard
            availableTheme={availableTheme}
            purchaseFunction={purchasing}
          />
        ))}
      </main>
      {(onPurchaseProcess) ? (
        <div className="theme-purchase-background">
          <div className="theme-purchase-card">
            <img src={purchasedTheme.source} alt="Tema a comprar" />
            <div className="theme-purchase-card-info">
              <p>
                ¡Muchas gracias por tu elección! Te encuentras por comprar
                el tema {purchasedTheme.title}. Kodonote no acepta cambios
                ni devoluciones por sus compras, por lo que no podremos
                devloverte tu dinero luego de comprar este tema.
              </p>
              <span>¿Seguro que quieres proceder a la compra?</span>
              <button type="button" onClick={() => {
                setOnPurchaseProcess(false)
                alert("¡Muchas gracias por tu compra!")
                setBackgroundTheme(purchasedTheme)
              }}>Comprar</button>
              <button type="button" onClick={() => setOnPurchaseProcess(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  )
}

export default ThemesPage
