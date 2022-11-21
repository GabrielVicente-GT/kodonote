describe('Kodonote notebook display', () => {
  it('succesfully loads', () => {
    cy.visit('http://localhost:3000/main', { responseTimeout: 1200000 })
    cy.get('#config-link').click()
    cy.get('#row-radio-button').click()
    cy.get('#btn-close').click()
  })
})
