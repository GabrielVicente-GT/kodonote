describe('Register process', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000', { responseTimeout: 1200000 }) 
    cy.get('.landing-page-link').contains('Ingresa a Kodonote').click()
    
    cy.get('.link-button').contains('aquí').click()

    cy.get('#email').type('correoCypress@gmail.com')
    cy.get('#input-confirm-password').type('Cypress123')
    cy.get('#input-confirm-password').type('Cypress123')
    cy.get('#terms-input').check()

    cy.log('Register successful')
  })
})
