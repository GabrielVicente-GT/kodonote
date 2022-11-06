import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../hooks/ThemeProvider'
import ThemeCard from './components/ThemeCard'
import Alert from './components/Alert'
import Logo from '../images/logo-negative.png'
import themes from '../utils/purchasedThemesGetter'
import '../styles/ThemesPage.css'

const MyThemes = () => {
  const { setBackgroundTheme } = useContext(ThemeContext)

  const [selected, setSelected] = useState(false)

  const setNewTheme = (selectedTheme) => {
    setBackgroundTheme(selectedTheme)
    setSelected(true)
  }

  return (
    <>
      <header>
        <h2>Selecciona uno de los temas que hayas comprado en Kodonote</h2>
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
        <Link to="/themes" className="theme-aside-button">Comprar temas</Link>
        <Link to="/main" className="theme-aside-button">Volver</Link>
      </aside>
      <main className="themes-main">
        {themes.map((availableTheme) => (
          <ThemeCard
            availableTheme={availableTheme}
            purchaseFunction={setNewTheme}
            usable
          />
        ))}
      </main>
      {(selected) ? (
        <div className="purchased-alert-background">
          <Alert
            alertTitle="¡Tema seleccionado!"
            alertText="¡Muy buena elección! Esperemos que disfrutes mucho el tema que has seleccionado para Kodonote."
            closeFunction={setSelected}
          />
        </div>
      ) : (
        null
      )}
    </>
  )
}

export default MyThemes
