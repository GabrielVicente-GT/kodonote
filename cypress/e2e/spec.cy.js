describe('el usuario presiona el boton cuenta', () => {
  it('pop Up se despliega', () => {
      cy.visit('http://localhost:3000/login') // change URL to match your dev URL
      
      cy.get('#Email').type('christopherg2808@gmail.com')
      cy.get('#password').type('prueba1234')

      
  })
})