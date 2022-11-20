describe('Login process', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000', { responseTimeout: 1200000 }) 
        cy.get('.landing-page-link').contains('Ingresa a Kodonote').click()
        cy.get('#Email').type('christopherg2808@gmail.com')
        cy.get('#password').type('prueba1234')
        cy.get('.form-btn-is').click()
  
        cy.log('Login successful')
    })
})