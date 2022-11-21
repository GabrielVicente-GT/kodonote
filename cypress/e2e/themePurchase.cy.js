describe('Kodonote theme purchase page', () => {
  it('succesfully loads', () => {
    cy.visit('http://localhost:3000/themes', { responseTimeout: 1200000 })
    cy.get('#theme-purchase-btn').click()
    cy.get('#theme-purchase-accept-btn').click()
    cy.get('#alert-accept-button').click()
  })
})
