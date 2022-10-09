import React from 'react'
import propTypes, { string } from 'prop-types'
import '../../styles/ThemeCard.css'

const ThemeCard = ({ availableTheme, purchaseFunction }) => (
  <div className="theme-card">
    <img src={availableTheme.source} alt="Tema de Kodonote" />
    <div className="theme-info">
      <div className="theme-title">
        <h3>{availableTheme.title}</h3>
      </div>
      <div className="theme-purchase-info">
        <span>{availableTheme.price}</span>
        <div className="theme-purchase-button">
          <button type="button" onClick={() => purchaseFunction(availableTheme)}>Comprar</button>
        </div>
      </div>
    </div>
  </div>
)

ThemeCard.propTypes = {
  availableTheme: propTypes.objectOf(string).isRequired,
  purchaseFunction: propTypes.func.isRequired,
}

export default ThemeCard
