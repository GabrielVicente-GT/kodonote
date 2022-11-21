describe('Kodonote owned themes page', () => {
  it('succesfully loads', () => {
    cy.visit('http://localhost:3000/my-themes', { responseTimeout: 1200000 })
    cy.get('#theme-set-btn').click()
    cy.get('#alert-accept-button').click()
  })
})
