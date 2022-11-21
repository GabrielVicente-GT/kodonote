describe('Travel into Kodonote', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/login', { responseTimeout: 1200000 })
    
    cy.get('#Email').type('christopherg2808@gmail.com')
    cy.get('#password').type('prueba1234')
    cy.get('.form-btn-is').click()

    cy.get('#0').click()

    cy.get('.notes-area').type('Esta es una prueba de sistema')
    cy.get('.boton').contains('Guardar cuaderno').click()

    cy.get('#alert-accept-button').click()

    cy.get('.boton').contains('Regresar').click()
    cy.get('#0').click()

    cy.get('.notes-area').type(', continuando la prueba')
    cy.get('.boton').contains('Guardar cuaderno').click()

    cy.get('#alert-accept-button').click()

    cy.get('.boton').contains('Regresar').click()
  })
})
