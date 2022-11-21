describe('El usuario selecciona ver temas', () => {
  it('aparece la pantalla de temas', () => {
    cy.visit('http://localhost:3000/login', { responseTimeout: 1200000 })
    cy.get('#Email').type('m4rkg12@gmail.com')
    cy.get('#password').type('jpegmafia')
    cy.get('.form-btn-is').click()
    cy.get('.themes-link').click()
  })
})
