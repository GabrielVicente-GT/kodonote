import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Necesario para los test de cosas como -> que se renderice el texto correcto
import userEvent from '@testing-library/user-event' // Eventos como dar click y otras cosas de usuario
<<<<<<< HEAD
import MainMenuMock from '../routes/MainMenu'
=======
import MainMenuMock from '../utils/MainMenuMock'
>>>>>>> popup-test
import 'regenerator-runtime/runtime'// Async Await

describe('Given a string -> string is a operator', () => {
    it('Renders the component with the text', () => {
      const character = 'cuenta'
      render(<MainMenuMock />)
  
      // Esta constante representa nuestro componente
      const element = screen.getByText(character)
      expect(element).toBeInTheDocument()
    })
  })