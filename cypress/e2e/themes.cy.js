describe('El usuario selecciona ver temas', () => {
  it('aparece la pantalla de temas', () => {
    cy.visit('http://localhost:3000/login', { responseTimeout: 1200000 }) // change URL to match your dev URL
    
    cy.get('#Email').type('m4rkg12@gmail.com')
    cy.get('#password').type('jpegmafia')

    cy.get('.form-btn-is').click()

    // Presionar el boton para ver temas
    cy.get('.themes-link').click()
  })
})
