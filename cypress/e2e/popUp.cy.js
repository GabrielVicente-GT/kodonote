// cypress-popup-themes-test

// TEst para cuenta
describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000/login') // change URL to match your dev URL
        
        cy.get('#Email').type('m4rkg12@gmail.com')
        cy.get('#password').type('jpegmafia')
  
        cy.get('.form-btn-is').click()

        // Presionar el boton
        cy.get('.account-link').click()

        // Presionar el boton
        // cy.get('.popup-account > dark-mode-checkbox').click()

        // Cerrar popUp
        cy.get('.popup-account > .btn-close').click()
    })
  })

// TEst para cuenta
describe('el usuario presiona el boton configuracion', () => {
    it('pop Up se despliega', () => {
        cy.visit('http://localhost:3000/login') // change URL to match your dev URL
        
        cy.get('#Email').type('m4rkg12@gmail.com')
        cy.get('#password').type('jpegmafia')
  
        cy.get('.form-btn-is').click()

        // Presionar el boton
        cy.get('.config-link').click()

        // Presionar el boton
        // cy.get('.popup-account > dark-mode-checkbox').click()

        // Cerrar popUp
        cy.get('.popup-config > .btn-close').click()
    })
  })

// TEst para opinion
describe('el usuario presiona el boton cuentanos tu opinion', () => {
    it('pop Up se despliega', () => {
        cy.visit('http://localhost:3000/login') // change URL to match your dev URL
        
        cy.get('#Email').type('m4rkg12@gmail.com')
        cy.get('#password').type('jpegmafia')
  
        cy.get('.form-btn-is').click()

        // Presionar el boton
        cy.get('.opinion-link').click()

        // Presionar el boton
        // cy.get('.popup-account > dark-mode-checkbox').click()

        // Cerrar popUp
        cy.get('.opinion-menu > button').click()
    })
  })