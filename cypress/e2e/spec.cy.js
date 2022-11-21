describe('el usuario presiona el boton cuenta', () => {
  it('pop Up se despliega', () => {
    cy.visit('http://localhost:3000/login', { responseTimeout: 1200000 })
    cy.get('#Email').type('christopherg2808@gmail.com')
    cy.get('#password').type('prueba1234')
  })
})
