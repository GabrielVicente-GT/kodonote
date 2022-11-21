import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../hooks/ThemeProvider'
import ThemeCard from './components/ThemeCard'
import Alert from './components/Alert'
import Logo from '../images/logo-negative.png'
import themes from '../utils/themeGetter'
import '../styles/ThemesPage.css'

const ThemesPage = () => {
  const { purchasedThemes, setPurchasedThemes, setBackgroundTheme } = useContext(ThemeContext)

  const [purchasedTheme, setPurchasedTheme] = useState()
  const [onPurchaseProcess, setOnPurchaseProcess] = useState(false)
  const [purchased, setPurchased] = useState(false)

  const purchasing = (selectedTheme) => {
    setPurchasedTheme(selectedTheme)
    setOnPurchaseProcess(true)
  }

  return (
    <>
      <header>
        <h2>Observa y compra nuevos temas para Kodonote</h2>
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
        <Link to="/my-themes" className="theme-aside-button">Ver mis temas</Link>
        <Link to="/main" className="theme-aside-button">Volver</Link>
      </aside>
      <main className="themes-main">
        {themes.map((availableTheme) => (
          <ThemeCard
            availableTheme={availableTheme}
            purchaseFunction={purchasing}
            usable={false}
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
              <button
                id="theme-purchase-accept-btn"
                type="button" 
                onClick={() => {
                  setOnPurchaseProcess(false)
                  setBackgroundTheme(purchasedTheme)
                  setPurchasedThemes([...purchasedThemes, purchasedTheme])
                  setPurchased(true)
                }}
              >Comprar</button>
              <button type="button" onClick={() => setOnPurchaseProcess(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
      {(purchased) ? (
        <div className="purchased-alert-background">
          <Alert
            alertTitle="¡Compra finalizada!"
            alertText="Tu compra ha sido efectuada con éxito. Como equipo de Kodonote, te agradecemos mucho el apoyo."
            closeFunction={setPurchased}
          />
        </div>
      ) : (
        null
      )}
    </>
  )
}

export default ThemesPage
