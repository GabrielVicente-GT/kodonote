describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/login', { responseTimeout: 1200000 })
    cy.get('#Email').type('m4rkg12@gmail.com')
    cy.get('#password').type('jpegmafia')
    cy.get('.form-btn-is').click()
    cy.get('.account-link').click()
    cy.get('.popup-account > .btn-close').click()
  })
})

describe('el usuario presiona el boton configuracion', () => {
  it('pop Up se despliega', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#Email').type('m4rkg12@gmail.com')
    cy.get('#password').type('jpegmafia')
    cy.get('.form-btn-is').click()
    cy.get('.config-link').click()
    cy.get('.popup-config > .btn-close').click()
  })
})

describe('el usuario presiona el boton cuentanos tu opinion', () => {
  it('pop Up se despliega', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#Email').type('m4rkg12@gmail.com')
    cy.get('#password').type('jpegmafia')
    cy.get('.form-btn-is').click()
    cy.get('.opinion-link').click()
    cy.get('.opinion-menu > button').click()
  })
})
