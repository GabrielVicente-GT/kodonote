import React, { createContext, useState, useMemo } from 'react'
import propTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [purchasedThemes, setPurchasedThemes] = useState([])
  const [backgroundTheme, setBackgroundTheme] = useState({})

  const state = useMemo(
    () => ({ purchasedThemes, setPurchasedThemes, backgroundTheme, setBackgroundTheme }),
    [purchasedThemes, backgroundTheme]
  )

  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export { ThemeContext }
export default ThemeProvider
